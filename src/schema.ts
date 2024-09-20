import { makeExecutableSchema } from '@graphql-tools/schema';
import { GraphQLContext } from './context';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import path from 'path';
import { Vendas } from '@prisma/client';
const typeDefs = loadSchemaSync(path.join(__dirname, './schema.graphql'), {
    loaders: [new GraphQLFileLoader()],
});


type categorias = {
    id: number;
    nome: string;
};

type fornecedores = {
    id: number;
    nome: string;
    email: string;
    contato: string;
    endereco: string;
};

type produtos = {
    id: number;
    nome: string;
    preco: number;
    quantidade: number;
};

type vendas = {
    id: number;
    quantidade: number;
    data: string;
    nomeDoProduto: string;
}

type historicoproduto = {
    id: number;
    nomeProduto: string;
    precoAntigo: number;
    precoNovo: number;
    quantidadeAntiga: number;
    quantidadeNova: number;
    data: string;
}


const resolvers = {
    Query: {
        categorias: async (parent: unknown, args: {}, context: GraphQLContext) => {
            return context.prisma.categorias.findMany();
        },
        fornecedores: async (parent: unknown, args: {}, context: GraphQLContext) => {
            return context.prisma.fornecedores.findMany();
        },
        produtos: async (parent: unknown, args: {}, context: GraphQLContext) => {
            return context.prisma.produtos.findMany();
        },
        vendas: async (parent: unknown, args: {}, context: GraphQLContext) => {
            return context.prisma.vendas.findMany();
        },
        historicoProdutos: async (parent: unknown, args: {}, context: GraphQLContext) => {
            return context.prisma.historicoProduto.findMany();
        },
    },
    Categoria: {
        id: (categoria: categorias) => categoria.id,
        nome: (categoria: categorias) => categoria.nome,
    },
    Fornecedor: {
        id: (fornecedor: fornecedores) => fornecedor.id,
        nome: (fornecedor: fornecedores) => fornecedor.nome,
        email: (fornecedor: fornecedores) => fornecedor.email,
        contato: (fornecedor: fornecedores) => fornecedor.contato,
        endereco: (fornecedor: fornecedores) => fornecedor.endereco,
    },
    Produto: {
        id: (produto: produtos) => produto.id,
        nome: (produto: produtos) => produto.nome,
        preco: (produto: produtos) => produto.preco,
        quantidade: (produto: produtos) => produto.quantidade,
    },
    Venda: {
        id: (venda: vendas) => venda.id,
        quantidade: (venda: vendas) => venda.quantidade,
        data: (venda: vendas) => venda.data,
        nomeDoProduto: (venda: vendas) => venda.nomeDoProduto,
    },
    HistoricoProduto: {
        id: (historicoProduto: historicoproduto) => historicoProduto.id,
        nomeProduto: (historicoProduto: historicoproduto) => historicoProduto.nomeProduto,
        precoAntigo: (historicoProduto: historicoproduto) => historicoProduto.precoAntigo,
        precoNovo: (historicoProduto: historicoproduto) => historicoProduto.precoNovo,
        quantidadeAntiga: (historicoProduto: historicoproduto) => historicoProduto.quantidadeAntiga,
        quantidadeNova: (historicoProduto: historicoproduto) => historicoProduto.quantidadeNova,
        data: (historicoProduto: historicoproduto) => historicoProduto.data,
    },

    Mutation: {
        criarCategoria: (parent: unknown, args: { nome: string }, context: GraphQLContext) => {
            const criarCategoria = context.prisma.categorias.create({
                data: {
                    nome: args.nome,
                },
            });
            return criarCategoria;
        },
        criarFornecedor: (parent: unknown, args: { nome: string, email: string, contato: string, endereco: string }, context: GraphQLContext) => {
            const criarFornecedor = context.prisma.fornecedores.create({
                data: {
                    nome: args.nome,
                    email: args.email,
                    contato: args.contato,
                    endereco: args.endereco,
                },
            });
            return criarFornecedor;
        },
        novaVenda: (parent: unknown, args: { quantidade: number, data: string, nomeDoProduto: string }, context: GraphQLContext) => {
            const novaVenda = context.prisma.vendas.create({
                data: {
                    quantidade: args.quantidade,
                    data: new Date(args.data),
                    nomeDoProduto: args.nomeDoProduto,
                },
            });
            return novaVenda;
        },
        criarProduto: (parent: unknown, args: { nome: string, preco: number, quantidade: number }, context: GraphQLContext) => {
            const criarProduto = context.prisma.produtos.create({
                data: {
                    nome: args.nome,
                    preco: args.preco,
                    quantidade: args.quantidade,
                },
            });
            return criarProduto;
        },
        novoHistoricoProduto: (parent: unknown, args: { nomeProduto: string, precoAntigo: number, precoNovo: number, quantidadeAntiga: number, quantidadeNova: number, data: string }, context: GraphQLContext) => {
            const novoHistoricoProduto = context.prisma.historicoProduto.create({
                data: {
                    nomeProduto: args.nomeProduto,
                    precoAntigo: args.precoAntigo,
                    precoNovo: args.precoNovo,
                    quantidadeAntiga: args.quantidadeAntiga,
                    quantidadeNova: args.quantidadeNova,
                    data: new Date(args.data),
                },
            });
            return novoHistoricoProduto;
        },

        deletarCategoria: (parent: unknown, args: { id: number }, context: GraphQLContext) => {
            return context.prisma.categorias.delete({
                where: { id: args.id },
            });
        },
        deletarFornecedor: (parent: unknown, args: { id: number }, context: GraphQLContext) => {
            return context.prisma.fornecedores.delete({
                where: { id: args.id },
            });
        },
        deletarVenda: async (parent: unknown, args: { id: number }, context: GraphQLContext) => {
            return context.prisma.vendas.delete({
                where: { id: args.id },
            });
        },
        deletarProduto: async (parent: unknown, args: { id: number }, context: GraphQLContext) => {
            return context.prisma.produtos.delete({
                where: { id: args.id },
            });
        },
        deletarHistoricoProduto: async (parent: unknown, args: { id: number }, context: GraphQLContext) => {
            return context.prisma.historicoProduto.delete({
                where: { id: args.id },
            });
        },

        atualizarFornecedor: (parent: unknown, args: { id: number, nome: string, email: string, contato: string, endereco: string }, context: GraphQLContext) => {
            const atualizarFornecedor = context.prisma.fornecedores.update({
                where: {
                    id: args.id,
                },
                data: {
                    nome: args.nome,
                    email: args.email,
                    contato: args.contato,
                    endereco: args.endereco,
                },
            });

            if (!atualizarFornecedor) {
                throw new Error('Erro ao atualizar fornecedor.');
            }

            return atualizarFornecedor;
        },
        atualizarHistoricoProduto: async (
            parent: unknown,
            args: {
                id: number,
                nomeProduto: string,
                precoAntigo: number,
                precoNovo: number,
                quantidadeAntiga: number,
                quantidadeNova: number,
                data: string
            },
            context: GraphQLContext
        ) => {
            try {
                const atualizarHistoricoProduto = await context.prisma.historicoProduto.update({
                    where: {
                        id: args.id,
                    },
                    data: {
                        nomeProduto: args.nomeProduto,
                        precoAntigo: args.precoAntigo,
                        precoNovo: args.precoNovo,
                        quantidadeAntiga: args.quantidadeAntiga,
                        quantidadeNova: args.quantidadeNova,
                        data: new Date(args.data),
                    },
                });

                return atualizarHistoricoProduto;
            } catch (error) {
                throw new Error("Erro ao atualizar o histórico do produto.");
            }
        },
    }
};


export const schema = makeExecutableSchema({ typeDefs, resolvers });
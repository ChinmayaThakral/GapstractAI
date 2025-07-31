/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@zenstackhq/runtime/models';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.CitationInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).citation.createMany(input as any))),

        create: procedure.input($Schema.CitationInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).citation.create(input as any))),

        deleteMany: procedure.input($Schema.CitationInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).citation.deleteMany(input as any))),

        delete: procedure.input($Schema.CitationInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).citation.delete(input as any))),

        findFirst: procedure.input($Schema.CitationInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).citation.findFirst(input as any))),

        findMany: procedure.input($Schema.CitationInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).citation.findMany(input as any))),

        findUnique: procedure.input($Schema.CitationInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).citation.findUnique(input as any))),

        updateMany: procedure.input($Schema.CitationInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).citation.updateMany(input as any))),

        update: procedure.input($Schema.CitationInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).citation.update(input as any))),

        count: procedure.input($Schema.CitationInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).citation.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.CitationCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CitationCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CitationCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CitationCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.CitationCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CitationCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CitationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CitationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CitationCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CitationCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CitationGetPayload<T>, Context>) => Promise<Prisma.CitationGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.CitationDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CitationDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CitationDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CitationDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.CitationDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CitationDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CitationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CitationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CitationDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CitationDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CitationGetPayload<T>, Context>) => Promise<Prisma.CitationGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.CitationFindFirstArgs, TData = Prisma.CitationGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.CitationFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CitationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CitationFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.CitationFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CitationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CitationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.CitationFindManyArgs, TData = Array<Prisma.CitationGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.CitationFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.CitationGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CitationFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.CitationFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.CitationGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.CitationGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.CitationFindUniqueArgs, TData = Prisma.CitationGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.CitationFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CitationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CitationFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CitationFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CitationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CitationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.CitationUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CitationUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CitationUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CitationUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.CitationUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CitationUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CitationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CitationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CitationUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CitationUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CitationGetPayload<T>, Context>) => Promise<Prisma.CitationGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.CitationCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.CitationCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.CitationCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.CitationCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.CitationCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.CitationCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.CitationCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.CitationCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}

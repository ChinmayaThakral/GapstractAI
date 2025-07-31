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

        createMany: procedure.input($Schema.AlgorithmInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).algorithm.createMany(input as any))),

        create: procedure.input($Schema.AlgorithmInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).algorithm.create(input as any))),

        deleteMany: procedure.input($Schema.AlgorithmInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).algorithm.deleteMany(input as any))),

        delete: procedure.input($Schema.AlgorithmInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).algorithm.delete(input as any))),

        findFirst: procedure.input($Schema.AlgorithmInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).algorithm.findFirst(input as any))),

        findMany: procedure.input($Schema.AlgorithmInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).algorithm.findMany(input as any))),

        findUnique: procedure.input($Schema.AlgorithmInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).algorithm.findUnique(input as any))),

        updateMany: procedure.input($Schema.AlgorithmInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).algorithm.updateMany(input as any))),

        update: procedure.input($Schema.AlgorithmInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).algorithm.update(input as any))),

        count: procedure.input($Schema.AlgorithmInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).algorithm.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.AlgorithmCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AlgorithmCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AlgorithmCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AlgorithmCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.AlgorithmCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AlgorithmCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AlgorithmGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AlgorithmGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AlgorithmCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AlgorithmCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AlgorithmGetPayload<T>, Context>) => Promise<Prisma.AlgorithmGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.AlgorithmDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AlgorithmDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AlgorithmDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AlgorithmDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.AlgorithmDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AlgorithmDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AlgorithmGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AlgorithmGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AlgorithmDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AlgorithmDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AlgorithmGetPayload<T>, Context>) => Promise<Prisma.AlgorithmGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.AlgorithmFindFirstArgs, TData = Prisma.AlgorithmGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.AlgorithmFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AlgorithmGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AlgorithmFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.AlgorithmFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AlgorithmGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AlgorithmGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.AlgorithmFindManyArgs, TData = Array<Prisma.AlgorithmGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.AlgorithmFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.AlgorithmGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AlgorithmFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.AlgorithmFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.AlgorithmGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.AlgorithmGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.AlgorithmFindUniqueArgs, TData = Prisma.AlgorithmGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.AlgorithmFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AlgorithmGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AlgorithmFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AlgorithmFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AlgorithmGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AlgorithmGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.AlgorithmUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AlgorithmUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AlgorithmUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AlgorithmUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.AlgorithmUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AlgorithmUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AlgorithmGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AlgorithmGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AlgorithmUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AlgorithmUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AlgorithmGetPayload<T>, Context>) => Promise<Prisma.AlgorithmGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.AlgorithmCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.AlgorithmCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.AlgorithmCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.AlgorithmCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.AlgorithmCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.AlgorithmCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.AlgorithmCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.AlgorithmCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}

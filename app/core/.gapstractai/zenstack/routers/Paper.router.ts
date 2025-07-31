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

        createMany: procedure.input($Schema.PaperInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).paper.createMany(input as any))),

        create: procedure.input($Schema.PaperInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).paper.create(input as any))),

        deleteMany: procedure.input($Schema.PaperInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).paper.deleteMany(input as any))),

        delete: procedure.input($Schema.PaperInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).paper.delete(input as any))),

        findFirst: procedure.input($Schema.PaperInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).paper.findFirst(input as any))),

        findMany: procedure.input($Schema.PaperInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).paper.findMany(input as any))),

        findUnique: procedure.input($Schema.PaperInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).paper.findUnique(input as any))),

        updateMany: procedure.input($Schema.PaperInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).paper.updateMany(input as any))),

        update: procedure.input($Schema.PaperInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).paper.update(input as any))),

        count: procedure.input($Schema.PaperInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).paper.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.PaperCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PaperCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PaperCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PaperCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.PaperCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PaperCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PaperGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PaperGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PaperCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PaperCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PaperGetPayload<T>, Context>) => Promise<Prisma.PaperGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.PaperDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PaperDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PaperDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PaperDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.PaperDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PaperDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PaperGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PaperGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PaperDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PaperDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PaperGetPayload<T>, Context>) => Promise<Prisma.PaperGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.PaperFindFirstArgs, TData = Prisma.PaperGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.PaperFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PaperGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PaperFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.PaperFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PaperGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PaperGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.PaperFindManyArgs, TData = Array<Prisma.PaperGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.PaperFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.PaperGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PaperFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.PaperFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.PaperGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.PaperGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.PaperFindUniqueArgs, TData = Prisma.PaperGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PaperFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PaperGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PaperFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PaperFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PaperGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PaperGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.PaperUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PaperUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PaperUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PaperUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.PaperUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PaperUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PaperGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PaperGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PaperUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PaperUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PaperGetPayload<T>, Context>) => Promise<Prisma.PaperGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.PaperCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.PaperCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.PaperCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.PaperCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.PaperCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.PaperCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.PaperCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.PaperCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}

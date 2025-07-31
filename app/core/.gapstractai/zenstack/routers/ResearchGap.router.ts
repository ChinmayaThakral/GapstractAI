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

        createMany: procedure.input($Schema.ResearchGapInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).researchGap.createMany(input as any))),

        create: procedure.input($Schema.ResearchGapInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).researchGap.create(input as any))),

        deleteMany: procedure.input($Schema.ResearchGapInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).researchGap.deleteMany(input as any))),

        delete: procedure.input($Schema.ResearchGapInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).researchGap.delete(input as any))),

        findFirst: procedure.input($Schema.ResearchGapInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).researchGap.findFirst(input as any))),

        findMany: procedure.input($Schema.ResearchGapInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).researchGap.findMany(input as any))),

        findUnique: procedure.input($Schema.ResearchGapInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).researchGap.findUnique(input as any))),

        updateMany: procedure.input($Schema.ResearchGapInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).researchGap.updateMany(input as any))),

        update: procedure.input($Schema.ResearchGapInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).researchGap.update(input as any))),

        count: procedure.input($Schema.ResearchGapInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).researchGap.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ResearchGapCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ResearchGapCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ResearchGapCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ResearchGapCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ResearchGapCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ResearchGapCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ResearchGapGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ResearchGapGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ResearchGapCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ResearchGapCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ResearchGapGetPayload<T>, Context>) => Promise<Prisma.ResearchGapGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ResearchGapDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ResearchGapDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ResearchGapDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ResearchGapDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ResearchGapDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ResearchGapDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ResearchGapGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ResearchGapGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ResearchGapDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ResearchGapDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ResearchGapGetPayload<T>, Context>) => Promise<Prisma.ResearchGapGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ResearchGapFindFirstArgs, TData = Prisma.ResearchGapGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.ResearchGapFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ResearchGapGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ResearchGapFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ResearchGapFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ResearchGapGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ResearchGapGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ResearchGapFindManyArgs, TData = Array<Prisma.ResearchGapGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.ResearchGapFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ResearchGapGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ResearchGapFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ResearchGapFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ResearchGapGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ResearchGapGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ResearchGapFindUniqueArgs, TData = Prisma.ResearchGapGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ResearchGapFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ResearchGapGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ResearchGapFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ResearchGapFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ResearchGapGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ResearchGapGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ResearchGapUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ResearchGapUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ResearchGapUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ResearchGapUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ResearchGapUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ResearchGapUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ResearchGapGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ResearchGapGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ResearchGapUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ResearchGapUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ResearchGapGetPayload<T>, Context>) => Promise<Prisma.ResearchGapGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.ResearchGapCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ResearchGapCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.ResearchGapCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ResearchGapCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.ResearchGapCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.ResearchGapCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.ResearchGapCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ResearchGapCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}

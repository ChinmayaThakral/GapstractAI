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

        createMany: procedure.input($Schema.AnalyticsLocalMetricInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).analyticsLocalMetric.createMany(input as any))),

        create: procedure.input($Schema.AnalyticsLocalMetricInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).analyticsLocalMetric.create(input as any))),

        deleteMany: procedure.input($Schema.AnalyticsLocalMetricInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).analyticsLocalMetric.deleteMany(input as any))),

        delete: procedure.input($Schema.AnalyticsLocalMetricInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).analyticsLocalMetric.delete(input as any))),

        findFirst: procedure.input($Schema.AnalyticsLocalMetricInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).analyticsLocalMetric.findFirst(input as any))),

        findMany: procedure.input($Schema.AnalyticsLocalMetricInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).analyticsLocalMetric.findMany(input as any))),

        findUnique: procedure.input($Schema.AnalyticsLocalMetricInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).analyticsLocalMetric.findUnique(input as any))),

        updateMany: procedure.input($Schema.AnalyticsLocalMetricInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).analyticsLocalMetric.updateMany(input as any))),

        update: procedure.input($Schema.AnalyticsLocalMetricInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).analyticsLocalMetric.update(input as any))),

        count: procedure.input($Schema.AnalyticsLocalMetricInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).analyticsLocalMetric.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.AnalyticsLocalMetricCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AnalyticsLocalMetricCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AnalyticsLocalMetricCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AnalyticsLocalMetricCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.AnalyticsLocalMetricCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AnalyticsLocalMetricCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AnalyticsLocalMetricGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AnalyticsLocalMetricGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AnalyticsLocalMetricCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AnalyticsLocalMetricCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AnalyticsLocalMetricGetPayload<T>, Context>) => Promise<Prisma.AnalyticsLocalMetricGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.AnalyticsLocalMetricDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AnalyticsLocalMetricDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AnalyticsLocalMetricDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AnalyticsLocalMetricDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.AnalyticsLocalMetricDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AnalyticsLocalMetricDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AnalyticsLocalMetricGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AnalyticsLocalMetricGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AnalyticsLocalMetricDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AnalyticsLocalMetricDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AnalyticsLocalMetricGetPayload<T>, Context>) => Promise<Prisma.AnalyticsLocalMetricGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.AnalyticsLocalMetricFindFirstArgs, TData = Prisma.AnalyticsLocalMetricGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.AnalyticsLocalMetricFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AnalyticsLocalMetricGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AnalyticsLocalMetricFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.AnalyticsLocalMetricFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AnalyticsLocalMetricGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AnalyticsLocalMetricGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.AnalyticsLocalMetricFindManyArgs, TData = Array<Prisma.AnalyticsLocalMetricGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.AnalyticsLocalMetricFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.AnalyticsLocalMetricGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AnalyticsLocalMetricFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.AnalyticsLocalMetricFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.AnalyticsLocalMetricGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.AnalyticsLocalMetricGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.AnalyticsLocalMetricFindUniqueArgs, TData = Prisma.AnalyticsLocalMetricGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.AnalyticsLocalMetricFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AnalyticsLocalMetricGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AnalyticsLocalMetricFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AnalyticsLocalMetricFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AnalyticsLocalMetricGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AnalyticsLocalMetricGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.AnalyticsLocalMetricUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AnalyticsLocalMetricUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AnalyticsLocalMetricUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AnalyticsLocalMetricUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.AnalyticsLocalMetricUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AnalyticsLocalMetricUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AnalyticsLocalMetricGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AnalyticsLocalMetricGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AnalyticsLocalMetricUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AnalyticsLocalMetricUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AnalyticsLocalMetricGetPayload<T>, Context>) => Promise<Prisma.AnalyticsLocalMetricGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.AnalyticsLocalMetricCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.AnalyticsLocalMetricCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.AnalyticsLocalMetricCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.AnalyticsLocalMetricCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.AnalyticsLocalMetricCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.AnalyticsLocalMetricCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.AnalyticsLocalMetricCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.AnalyticsLocalMetricCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}

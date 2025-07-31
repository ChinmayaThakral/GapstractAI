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

        createMany: procedure.input($Schema.AnnotationInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).annotation.createMany(input as any))),

        create: procedure.input($Schema.AnnotationInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).annotation.create(input as any))),

        deleteMany: procedure.input($Schema.AnnotationInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).annotation.deleteMany(input as any))),

        delete: procedure.input($Schema.AnnotationInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).annotation.delete(input as any))),

        findFirst: procedure.input($Schema.AnnotationInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).annotation.findFirst(input as any))),

        findMany: procedure.input($Schema.AnnotationInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).annotation.findMany(input as any))),

        findUnique: procedure.input($Schema.AnnotationInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).annotation.findUnique(input as any))),

        updateMany: procedure.input($Schema.AnnotationInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).annotation.updateMany(input as any))),

        update: procedure.input($Schema.AnnotationInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).annotation.update(input as any))),

        count: procedure.input($Schema.AnnotationInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).annotation.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.AnnotationCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AnnotationCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AnnotationCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AnnotationCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.AnnotationCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AnnotationCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AnnotationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AnnotationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AnnotationCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AnnotationCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AnnotationGetPayload<T>, Context>) => Promise<Prisma.AnnotationGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.AnnotationDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AnnotationDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AnnotationDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AnnotationDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.AnnotationDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AnnotationDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AnnotationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AnnotationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AnnotationDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AnnotationDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AnnotationGetPayload<T>, Context>) => Promise<Prisma.AnnotationGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.AnnotationFindFirstArgs, TData = Prisma.AnnotationGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.AnnotationFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AnnotationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AnnotationFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.AnnotationFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AnnotationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AnnotationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.AnnotationFindManyArgs, TData = Array<Prisma.AnnotationGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.AnnotationFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.AnnotationGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AnnotationFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.AnnotationFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.AnnotationGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.AnnotationGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.AnnotationFindUniqueArgs, TData = Prisma.AnnotationGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.AnnotationFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AnnotationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AnnotationFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AnnotationFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AnnotationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AnnotationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.AnnotationUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AnnotationUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AnnotationUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AnnotationUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.AnnotationUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AnnotationUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AnnotationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AnnotationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AnnotationUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AnnotationUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AnnotationGetPayload<T>, Context>) => Promise<Prisma.AnnotationGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.AnnotationCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.AnnotationCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.AnnotationCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.AnnotationCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.AnnotationCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.AnnotationCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.AnnotationCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.AnnotationCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}

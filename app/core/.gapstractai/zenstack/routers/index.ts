/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@zenstackhq/runtime/models";
import createAnalyticsLocalMetricRouter from "./AnalyticsLocalMetric.router";
import createUserRouter from "./User.router";
import createPaperRouter from "./Paper.router";
import createAnnotationRouter from "./Annotation.router";
import createResearchGapRouter from "./ResearchGap.router";
import createAlgorithmRouter from "./Algorithm.router";
import createCitationRouter from "./Citation.router";
import createOrganizationRouter from "./Organization.router";
import createOrganizationRoleRouter from "./OrganizationRole.router";
import { ClientType as AnalyticsLocalMetricClientType } from "./AnalyticsLocalMetric.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as PaperClientType } from "./Paper.router";
import { ClientType as AnnotationClientType } from "./Annotation.router";
import { ClientType as ResearchGapClientType } from "./ResearchGap.router";
import { ClientType as AlgorithmClientType } from "./Algorithm.router";
import { ClientType as CitationClientType } from "./Citation.router";
import { ClientType as OrganizationClientType } from "./Organization.router";
import { ClientType as OrganizationRoleClientType } from "./OrganizationRole.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        analyticsLocalMetric: createAnalyticsLocalMetricRouter(router, procedure),
        user: createUserRouter(router, procedure),
        paper: createPaperRouter(router, procedure),
        annotation: createAnnotationRouter(router, procedure),
        researchGap: createResearchGapRouter(router, procedure),
        algorithm: createAlgorithmRouter(router, procedure),
        citation: createCitationRouter(router, procedure),
        organization: createOrganizationRouter(router, procedure),
        organizationRole: createOrganizationRoleRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    analyticsLocalMetric: AnalyticsLocalMetricClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    paper: PaperClientType<AppRouter>;
    annotation: AnnotationClientType<AppRouter>;
    researchGap: ResearchGapClientType<AppRouter>;
    algorithm: AlgorithmClientType<AppRouter>;
    citation: CitationClientType<AppRouter>;
    organization: OrganizationClientType<AppRouter>;
    organizationRole: OrganizationRoleClientType<AppRouter>;
}

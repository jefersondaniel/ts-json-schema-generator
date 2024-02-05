import ts from "typescript";

export type DefinitionNameMapper = (name: string, node: ts.Node) => string;

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import gql from 'graphql-tag';

export const sourceStatusSchema = gql`
  "A descriptor of a field in an index"
  type InfraIndexField {
    "The name of the field"
    name: String!
    "The type of the field's values as recognized by Kibana"
    type: String!
    "Whether the field's values can be efficiently searched for"
    searchable: Boolean!
    "Whether the field's values can be aggregated"
    aggregatable: Boolean!
  }

  extend type InfraSourceStatus {
    "Whether the configured metric alias exists"
    metricAliasExists: Boolean!
    "Whether the configured log alias exists"
    logAliasExists: Boolean!
    "The list of indices in the metric alias"
    metricIndices: [String!]!
    "The list of indices in the log alias"
    logIndices: [String!]!
    "The list of fields defined in the index mappings"
    indexFields(indexType: InfraIndexType = ANY): [InfraIndexField!]!
  }
`;
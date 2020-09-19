import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `ID` scalar type represents a unique MongoDB identifier in collection. MongoDB by default use 12-byte ObjectId value (https://docs.mongodb.com/manual/reference/bson-types/#objectid). But MongoDB also may accepts string or integer as correct values for _id field. */
  MongoID: any;
};

export type Query = {
  __typename?: 'Query';
  userById?: Maybe<User>;
  userByIds?: Maybe<Array<User>>;
  userOne?: Maybe<User>;
  userMany?: Maybe<Array<User>>;
  userCount?: Maybe<Scalars['Int']>;
};


export type QueryUserByIdArgs = {
  _id: Scalars['MongoID'];
};


export type QueryUserByIdsArgs = {
  _ids: Array<Maybe<Scalars['MongoID']>>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsUserInput>;
};


export type QueryUserOneArgs = {
  filter?: Maybe<FilterFindOneUserInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneUserInput>;
};


export type QueryUserManyArgs = {
  filter?: Maybe<FilterFindManyUserInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyUserInput>;
};


export type QueryUserCountArgs = {
  filter?: Maybe<FilterUserInput>;
};

export type User = {
  __typename?: 'User';
  name: Scalars['String'];
  email: Scalars['String'];
  position?: Maybe<Scalars['String']>;
  employeeId?: Maybe<Scalars['Float']>;
  _id: Scalars['MongoID'];
};


export enum SortFindByIdsUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC'
}

export type FilterFindOneUserInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  employeeId?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterFindOneUserInput>;
  OR?: Maybe<Array<FilterFindOneUserInput>>;
  AND?: Maybe<Array<FilterFindOneUserInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterFindOneUserInput = {
  email?: Maybe<EmailOperatorsFilterFindOneUserInput>;
  _id?: Maybe<_IdOperatorsFilterFindOneUserInput>;
};

export type EmailOperatorsFilterFindOneUserInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type _IdOperatorsFilterFindOneUserInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export enum SortFindOneUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC'
}

export type FilterFindManyUserInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  employeeId?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterFindManyUserInput>;
  OR?: Maybe<Array<FilterFindManyUserInput>>;
  AND?: Maybe<Array<FilterFindManyUserInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterFindManyUserInput = {
  email?: Maybe<EmailOperatorsFilterFindManyUserInput>;
  _id?: Maybe<_IdOperatorsFilterFindManyUserInput>;
};

export type EmailOperatorsFilterFindManyUserInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type _IdOperatorsFilterFindManyUserInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export enum SortFindManyUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC'
}

export type FilterUserInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  employeeId?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterUserInput>;
  OR?: Maybe<Array<FilterUserInput>>;
  AND?: Maybe<Array<FilterUserInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterUserInput = {
  email?: Maybe<EmailOperatorsFilterUserInput>;
  _id?: Maybe<_IdOperatorsFilterUserInput>;
};

export type EmailOperatorsFilterUserInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type _IdOperatorsFilterUserInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create one document with mongoose defaults, setters, hooks and validation */
  userCreateOne?: Maybe<CreateOneUserPayload>;
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  userCreateMany?: Maybe<CreateManyUserPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  userUpdateById?: Maybe<UpdateByIdUserPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  userUpdateOne?: Maybe<UpdateOneUserPayload>;
  /** Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  userUpdateMany?: Maybe<UpdateManyUserPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  userRemoveById?: Maybe<RemoveByIdUserPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  userRemoveOne?: Maybe<RemoveOneUserPayload>;
  /** Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  userRemoveMany?: Maybe<RemoveManyUserPayload>;
};


export type MutationUserCreateOneArgs = {
  record: CreateOneUserInput;
};


export type MutationUserCreateManyArgs = {
  records: Array<CreateManyUserInput>;
};


export type MutationUserUpdateByIdArgs = {
  record: UpdateByIdUserInput;
};


export type MutationUserUpdateOneArgs = {
  record: UpdateOneUserInput;
  filter?: Maybe<FilterUpdateOneUserInput>;
  sort?: Maybe<SortUpdateOneUserInput>;
  skip?: Maybe<Scalars['Int']>;
};


export type MutationUserUpdateManyArgs = {
  record: UpdateManyUserInput;
  filter?: Maybe<FilterUpdateManyUserInput>;
  sort?: Maybe<SortUpdateManyUserInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationUserRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};


export type MutationUserRemoveOneArgs = {
  filter?: Maybe<FilterRemoveOneUserInput>;
  sort?: Maybe<SortRemoveOneUserInput>;
};


export type MutationUserRemoveManyArgs = {
  filter: FilterRemoveManyUserInput;
};

export type CreateOneUserPayload = {
  __typename?: 'CreateOneUserPayload';
  /** Created document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Created document */
  record?: Maybe<User>;
};

export type CreateOneUserInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  position?: Maybe<Scalars['String']>;
  employeeId?: Maybe<Scalars['Float']>;
};

export type CreateManyUserPayload = {
  __typename?: 'CreateManyUserPayload';
  /** Created document ID */
  recordIds: Array<Scalars['MongoID']>;
  /** Created documents */
  records: Array<User>;
  /** Count of all documents created */
  createCount: Scalars['Int'];
};

export type CreateManyUserInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  position?: Maybe<Scalars['String']>;
  employeeId?: Maybe<Scalars['Float']>;
};

export type UpdateByIdUserPayload = {
  __typename?: 'UpdateByIdUserPayload';
  /** Updated document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<User>;
};

export type UpdateByIdUserInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  employeeId?: Maybe<Scalars['Float']>;
  _id: Scalars['MongoID'];
};

export type UpdateOneUserPayload = {
  __typename?: 'UpdateOneUserPayload';
  /** Updated document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<User>;
};

export type UpdateOneUserInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  employeeId?: Maybe<Scalars['Float']>;
};

export type FilterUpdateOneUserInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  employeeId?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterUpdateOneUserInput>;
  OR?: Maybe<Array<FilterUpdateOneUserInput>>;
  AND?: Maybe<Array<FilterUpdateOneUserInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterUpdateOneUserInput = {
  email?: Maybe<EmailOperatorsFilterUpdateOneUserInput>;
  _id?: Maybe<_IdOperatorsFilterUpdateOneUserInput>;
};

export type EmailOperatorsFilterUpdateOneUserInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type _IdOperatorsFilterUpdateOneUserInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export enum SortUpdateOneUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC'
}

export type UpdateManyUserPayload = {
  __typename?: 'UpdateManyUserPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
};

export type UpdateManyUserInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  employeeId?: Maybe<Scalars['Float']>;
};

export type FilterUpdateManyUserInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  employeeId?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterUpdateManyUserInput>;
  OR?: Maybe<Array<FilterUpdateManyUserInput>>;
  AND?: Maybe<Array<FilterUpdateManyUserInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterUpdateManyUserInput = {
  email?: Maybe<EmailOperatorsFilterUpdateManyUserInput>;
  _id?: Maybe<_IdOperatorsFilterUpdateManyUserInput>;
};

export type EmailOperatorsFilterUpdateManyUserInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type _IdOperatorsFilterUpdateManyUserInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export enum SortUpdateManyUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC'
}

export type RemoveByIdUserPayload = {
  __typename?: 'RemoveByIdUserPayload';
  /** Removed document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<User>;
};

export type RemoveOneUserPayload = {
  __typename?: 'RemoveOneUserPayload';
  /** Removed document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<User>;
};

export type FilterRemoveOneUserInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  employeeId?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterRemoveOneUserInput>;
  OR?: Maybe<Array<FilterRemoveOneUserInput>>;
  AND?: Maybe<Array<FilterRemoveOneUserInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterRemoveOneUserInput = {
  email?: Maybe<EmailOperatorsFilterRemoveOneUserInput>;
  _id?: Maybe<_IdOperatorsFilterRemoveOneUserInput>;
};

export type EmailOperatorsFilterRemoveOneUserInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type _IdOperatorsFilterRemoveOneUserInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export enum SortRemoveOneUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC'
}

export type RemoveManyUserPayload = {
  __typename?: 'RemoveManyUserPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
};

export type FilterRemoveManyUserInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  employeeId?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterRemoveManyUserInput>;
  OR?: Maybe<Array<FilterRemoveManyUserInput>>;
  AND?: Maybe<Array<FilterRemoveManyUserInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterRemoveManyUserInput = {
  email?: Maybe<EmailOperatorsFilterRemoveManyUserInput>;
  _id?: Maybe<_IdOperatorsFilterRemoveManyUserInput>;
};

export type EmailOperatorsFilterRemoveManyUserInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type _IdOperatorsFilterRemoveManyUserInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type GetUserManyQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserManyQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'userCount'>
  & { userMany?: Maybe<Array<(
    { __typename?: 'User' }
    & Pick<User, 'name' | 'email' | '_id'>
  )>> }
);


export const GetUserManyDocument = gql`
    query GetUserMany {
  userMany {
    name
    email
    _id
  }
  userCount
}
    `;

/**
 * __useGetUserManyQuery__
 *
 * To run a query within a React component, call `useGetUserManyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserManyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserManyQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserManyQuery(baseOptions?: Apollo.QueryHookOptions<GetUserManyQuery, GetUserManyQueryVariables>) {
        return Apollo.useQuery<GetUserManyQuery, GetUserManyQueryVariables>(GetUserManyDocument, baseOptions);
      }
export function useGetUserManyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserManyQuery, GetUserManyQueryVariables>) {
          return Apollo.useLazyQuery<GetUserManyQuery, GetUserManyQueryVariables>(GetUserManyDocument, baseOptions);
        }
export type GetUserManyQueryHookResult = ReturnType<typeof useGetUserManyQuery>;
export type GetUserManyLazyQueryHookResult = ReturnType<typeof useGetUserManyLazyQuery>;
export type GetUserManyQueryResult = Apollo.QueryResult<GetUserManyQuery, GetUserManyQueryVariables>;
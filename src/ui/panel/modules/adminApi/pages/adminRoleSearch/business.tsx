import React from 'react';
import { useParams } from 'react-router-dom';
import { pageConfig } from './config';
import { GridBulkActionProp, GridRowExtraActionProp, SearchPage, UpsertPage, DetailPage } from 'onka-react-admin-core';

export const SearchRowActions = (props: GridRowExtraActionProp) => {
  return <></>;
};

export const SearchBulkActions = (props: GridBulkActionProp) => <></>;

export const initialValues = {};

function Search(params: any) {
  let gridFields = pageConfig.fields.filter((x) => x.inGrid);
  let filterFields = pageConfig.fields.filter((x) => x.inFilter);
  return SearchPage({ pageConfig: pageConfig, gridFields, filterFields });
}

function Detail(params: any) {
  let fields = pageConfig.fields.filter((x) => x.inDetail);
  return DetailPage({ pageConfig: pageConfig, fields: fields });
}

function Upsert(params: any) {
  const { id } = useParams<{ id: any }>();
  const isEdit = id && id > 0;
  let fields = pageConfig.fields.filter((x) => (isEdit ? x.isEditable : x.isCreatable));
  return UpsertPage({ pageConfig, fields, initialValues });
}

export { Search, Detail, Upsert };

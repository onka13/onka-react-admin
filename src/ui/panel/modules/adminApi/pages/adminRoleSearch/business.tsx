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
  let gridFields = pageConfig.gridFields;
  let filterFields = pageConfig.filterFields;
  return SearchPage({ pageConfig: pageConfig, gridFields, filterFields, fields: pageConfig.fields });
}

function Detail(params: any) {
  let fields = pageConfig.fields.filter((x) => x.displayInDetail);
  return DetailPage({ pageConfig: pageConfig, fields: fields });
}

function Upsert(params: any) {
  const { id } = useParams<{ id: any }>();
  const isEdit = !!id;
  let fields = pageConfig.fields.filter((x) => (isEdit ? x.displayInEdit : x.displayInCreate));
  return UpsertPage({ pageConfig, fields, initialValues });
}

export { Search, Detail, Upsert };

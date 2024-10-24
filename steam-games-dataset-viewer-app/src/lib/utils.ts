export const getSearchParams = (url: string) => {
  const { searchParams } = new URL(url);
  const page: number = Number(searchParams.get('page')) || 1;
  const pageSize: number = Number(searchParams.get('pageSize')) || 10;
  const filter = searchParams.get('filter') || '';
  const orderBy = searchParams.get('orderBy') || 'name';
  const orderDir = searchParams.get('orderDir') || 'asc';

  return { page, pageSize, filter, orderBy, orderDir };
};

export const appendOrderBy = (orderBy: string, orderDir: string) => {
  if (!orderBy || !orderDir) {
    return '';
  }

  return ` ORDER BY ${orderBy} ${orderDir}`;
};

export const appendPagination = (page: number, pageSize: number) => {
  const offset = (page - 1) * pageSize;
  return ` LIMIT ${pageSize} OFFSET ${offset};`;
};

export const appendNotNullName = () => {
  return ` name != ''`;
};

export const appendFilter = (column: string, value: string) => {
  if (!column || !value) {
    return '';
  }

  return ` and ${column} ILIKE ${value}`;
};

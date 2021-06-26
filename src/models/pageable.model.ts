import { TableParams } from './table-params.model';
import { TableMeta } from './table-meta.model';

export interface Pageable {
    content: any[];
    meta: TableMeta;
    params: TableParams;
}

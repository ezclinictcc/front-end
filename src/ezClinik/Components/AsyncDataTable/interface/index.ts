export interface IBundles {
    qttSearch: string;
    qttSearchPlural: string;
    showing: string;
    rowsSelected: string;
    rowsSelectedPlural: string;
    of: string;
    page: string;
    noData: string;
    registration: string;
    registrationPlural: string;
   }

   export interface IPagination {
    currentPage: number;
    qttPagesShow: number;
    totalRegister: number;
    registerPerPage: number;
    startIndex: number;
    endIndex: number;
    sortBy?: string;
    isSortDesc?: boolean;
   }
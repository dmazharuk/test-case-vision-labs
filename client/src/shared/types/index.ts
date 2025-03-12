export type ApiResponse<requestType> = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: requestType[];
};

export type CharacterFilterParams = {
  page?: number;
  name?: string;
  status?: string;
};

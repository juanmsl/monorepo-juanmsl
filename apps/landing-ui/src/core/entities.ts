type ParamsWithLang<Params> = Params & {
  lang: string;
};

export type PageWithParams<Props = {}, Params = {}> = Props & {
  params: ParamsWithLang<Params>;
};

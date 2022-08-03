const logger = {
  log: (name: string, ...args: Array<any>) => {
    if (__DEV__) {
      console.log(
        `%c START LOG - ${name}: `,
        'background: green; color: #fff;',
      );
      // @ts-ignore
      console.log(JSON.stringify(...args, null, 2));
      console.log(`%c END LOG - ${name}`, 'background: green; color: #fff;');
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  error: async (name: string, error: any, logError = true) => {
    if (__DEV__) {
      console.log(
        `%c START ERROR LOG - ${name}: `,
        'background: red; color: #fff;',
      );
      console.log(JSON.stringify(error, null, 2));
      console.log(
        `%c END ERROR LOG - ${name}`,
        'background: red; color: #fff;',
      );
    }
    /*
    if (!__DEV__ && logError) {
      let err: Error;
      if (error instanceof Error) {
        err = error;
      } else {
        err = new Error(error);
      }

      await crashlytics().log(name);
      await crashlytics().recordError(err);
    }
    */
  },
};

export default logger;

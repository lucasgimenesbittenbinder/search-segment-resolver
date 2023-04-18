export const queries = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    searchSegment: async (_: unknown, args: SearchSegmentInput, __: Context) => {
        console.log({args})
      const userEmail = args.userEmail
      const domain = userEmail?.split('@')[1]
  
        console.log({ userEmail })

      return domain === 'b8one.com' ? [{ key: 'category-1', value: 'Teste Privalia - Departamento' }] : [{ key: 'productClusterIds', value: '456' }]
    },
  }
  
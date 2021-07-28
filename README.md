# codegen-apollo-repro

This is related to https://github.com/dotansimha/graphql-code-generator/issues/3863

added a `test.graphql` file with this query:

```
{
  __type(name:"Role") {
    enumValues {
      name
    }
  }
}
```

running `yarn codegen` will throw this error:

```
 Unable to find field "__type" on type "Query"!
```

playground:

`https://codegen-apollo-repro.vercel.app/api/graphql`

http://localhost:4000/graphql

query {
    hello
}

query {
    cat {
        id,
        name
    }
}

mutation {
    createCat(name: :"sam") {
        id,
        name
    }
}
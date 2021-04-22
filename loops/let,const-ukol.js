let bookCount = 0

function increment() {
    bookCount += 1
    console.log(bookCount)
}
increment()

//

let books = ['Moby Dick', 'Alice in Wonderland', 'Hungry Caterpillar']

function replaceBooks() {
    books = ['Life of Pi', 'Grokkings Algorithms', 'New Earth']
    console.log(books)
}
replaceBooks()

//

function textCustomer() {
    const firstName = 'Molly'
    console.log('Hi ' + firstName + ', your book is now in')
}
textCustomer()
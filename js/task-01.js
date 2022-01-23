const categoriesRef = document.querySelectorAll('.item')
const numberCategories = categoriesRef.length
console.log('Number of categories:', numberCategories)

categoriesRef.forEach(category => {
    const categoriesTitleRef = category.querySelector('h2')
    const title = categoriesTitleRef.textContent
    console.log('Category:', title)

    const elementsRef = category.querySelectorAll('li')
    const numberElements = elementsRef.length
    console.log('Elements:', numberElements)
})
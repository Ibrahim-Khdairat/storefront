/*
State should be a list of all products
Each product should have a category association, name, description, price, inventory count
*/

let initialState = {
    products: [
        {
            category: 'FOOD',
            name: 'Dawalee',
            description: 'ALL YOU WANT HERE',
            price: '5 JD',
            inventoryCount: 3,
            imeage: 'https://www.supermama.me/system/App/Entities/Recipe/images/000/108/201/watermarked/%D9%88%D8%B1%D9%82-%D8%B9%D9%86%D8%A8-%D8%B9%D8%B1%D8%A7%D9%82%D9%8A.jpg'
        }, {
            category: 'FOOD',
            name: 'Mansaf',
            description: 'ALL YOU WANT HERE',
            price: '10 JD',
            inventoryCount: 5,
            imeage: 'https://t4.ftcdn.net/jpg/02/65/52/23/240_F_265522357_JCF8WVgnNg1y6ClBDtqp4yUXTrZnTGuc.jpg',
        }, 
        {
            category: 'FOOD',
            name: 'Maqlubeh',
            description: 'ALL YOU WANT HERE',
            price: '10 JD',
            inventoryCount: 5,
            imeage: 'https://www.tareekaa.com/wp-content/uploads/2019/08/%D9%85%D9%82%D9%84%D9%88%D8%A8%D8%A9-%D8%A7%D9%84%D8%A8%D8%A7%D8%B0%D9%86%D8%AC%D8%A7%D9%86.jpg',
        }, {

            category: 'ELECTRONICS',
            name: 'TV',
            description: 'ALL YOU WANT HERE',
            price: '300 JD',
            inventoryCount: 3,
            imeage: 'https://t3.ftcdn.net/jpg/00/68/26/34/240_F_68263422_zf3uvYygwl2LFH0N0Q44u6NGPYIJtudj.jpg'
        },
        {

            category: 'ELECTRONICS',
            name: 'DELL Laptop',
            description: 'ALL YOU WANT HERE',
            price: '499.99 JD',
            inventoryCount: 10,
            imeage: 'https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/latitude_notebooks/latitude_15_5520/global_spi/ng/notebook-latitude-15-5520-campaign-hero-504x350-ng.psd?fmt=jpg&wid=570&hei=400'
        },
        {

            category: 'ELECTRONICS',
            name: 'Fredg',
            description: 'ALL YOU WANT HERE',
            price: '899.99 JD',
            inventoryCount: 2,
            imeage: 'https://images.thdstatic.com/productImages/35a1abed-11b8-4e9e-91d8-6449e09e9bb7/svn/fingerprint-resistant-stainless-steel-samsung-french-door-refrigerators-rf28t5001sr-64_300.jpg'
        }

    ]
}

// here will add the reducer
// a reducer will take the old state and return the new state
// also a reducer will an action as a second paramter.

// we pass as default state value the initialState, this will be used
// the first time we run the app, since the state will be undefined.

const ReduceProducts = (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'ACTIVE':

            let product = state.products.filter(product => {

                return product.category == payload ? product.category : null;
            })
            return { ...state, product };
        case 'RESET':
            return initialState;
        default:
            return state;
    };
}
// for the action 
/*
Create an action that will trigger when the active category is changed
HINT: Multiple reducers can respond to the same actions
*/
export default ReduceProducts;
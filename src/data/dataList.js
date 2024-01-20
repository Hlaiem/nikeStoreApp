//i-tech
import enceinteParty from '../assets/products/I-Tech/enceinte-party-box-600w METRONIC 499DT.jpg'
import pcPortable from '../assets/products/I-Tech/lenovo-portable-v15-amd-3020e-8g-1to-hdd LENOVO 834.6DT.jpg'
import sourisClavier from '../assets/products/I-Tech/spirit-of-gamer-pack-elite-mk30-clavier-et-souris-gamer  100dt.jpg'
import casqueBluetooth from '../assets/products/I-Tech/casque-p47-bluetooth-41-portee-jusqu-a-10m-autonomie-jusqu-a-6-heures-rouge  32dt.jpg'
import coqueIphone6 from '../assets/products/I-Tech/fashion-coque-iphone-66s-rose 10.7DT.jpg'


//maison&deco
import appareilPopcorn from '../assets/products/maison & décorations/appareil-a-pop-corn 157dt.jpg'
import Aspirateur from '../assets/products/maison & décorations/aspirateur-eau-et-poussieres 381dt.jpg'
import carafe from '../assets/products/maison & décorations/carafe-isolante-05-l  44dt.jpg'
import machineCaffe from '../assets/products/maison & décorations/machine-cafe-nespresso.jpg price 285DT.jpg'
import balanceCuisine from '../assets/products/maison & décorations/balance-de-cuisine-  94dt.jpg'
import balanceCuisine1 from '../assets/products/maison & décorations/balance-de-cuisine-en-verre-ecran-lcd-5-kg-white 79dt.jpg'

//Beaute
import shavestyle from '../assets/products/Soins, Beauté & Fitness/310bt-shavestyle-serie3.jpg'
import babyliss from '../assets/products/Soins, Beauté & Fitness/babyliss-seche-cheveux.jpg'
import brosse from '../assets/products/Soins, Beauté & Fitness/brosse-chauffante-homme-femme.jpg'

import coffret from '../assets/products/Soins, Beauté & Fitness/coffret-argilo-argan.jpg'
import coffret1 from '../assets/products/Soins, Beauté & Fitness/coffret-argilo-l-aloe-vera.jpg'
import deodorant from '../assets/products/Soins, Beauté & Fitness/deodorant-homme-dry-impact-anti-transpirant.jpg'

export const dataList = [

	{
		name: 'casque-p47-bluetooth',
		category: 'casque',
		brand : 'Veron',
		id: '1',
		cover: casqueBluetooth,
		price: 32,
		rate:5
	},
	{
		name: 'lenovo-portable-v15-amd-3020e-8g-1to-hdd',
		category: 'pc',
		brand: 'lenovo',
		id: '2',
		cover: pcPortable,
		price: 834.6,
		rate:4
	},
	{
		name: 'fashion-coque-iphone-66s-rose',
		category: 'coque phone',
		brand: 'Appel',
		id: '3',
		cover: coqueIphone6,
		price: 10.7,
		rate:4
	},
	{
		name: 'spirit-of-gamer-pack-elite-mk30-clavier-et-souris-gamer',
		category: 'souris',
		brand: '',
		id: '4',
		cover: sourisClavier,
		price: 100,
		rate:5
	},
	{
		name: 'enceinte-party-box-600w',
		category: 'enceinte',
		brand : 'METRONIC',
		id: '5',
		cover: enceinteParty,
		price: 499,
		rate:5
	},
	//maison & deco
	{
		name:'appareil-a-pop-corn',
		category:'machine',
		brand:'Power plus',
		id:'34',
		cover:appareilPopcorn,
		price:149,
		rate:5
	},
	{
		name:'aspirateur-eau-et-poussieres',
		category:'aspirateur',
		brand:'Kejou',
		id:'35',
		cover:Aspirateur,
		price:382,
		rate:3
	},
	{
		name:'carafe-isolante-05-l',
		category:'carafe',
		brand:'',
		id:'36',
		cover:carafe,
		price:44,
		rate:4
	},
	{
		name:'machine-cafe-nespresso.jpg price',
		category:'aspirateur',
		brand:'Nespresso',
		id:'37',
		cover:machineCaffe,
		price:285,
		rate:5
	},
	{
		name:'balance-de-cuisine',
		category:'balance de cuisine',
		brand:'Think',
		id:'38',
		cover:balanceCuisine,
		price:94,
		rate:4
	},
	{
		name:'balance-de-cuisine-en-verre-ecran-lcd-5-kg-white',
		category:'balance de cuisine',
		brand:'Think',
		id:'39',
		cover:balanceCuisine1,
		price:79,
		rate:5
	},
//Beaute
{
    name: '310bt-shavestyle-serie3',
    category: 'tondeuse',
    brand: 'Davis',
    id: '1',
    cover: shavestyle,
    price: 54,
    rate:4
},
{
    name: 'babyliss-seche-cheveux',
    category: 'seche cheveux',
    brand: 'AVIS',
    id: '2',
    cover: babyliss,
    price: 59,
    rate:5
},
{
    name: 'brosse-chauffante-homme-femme',
    category: 'seche cheveux',
    brand: 'braun',
    id: '3',
    cover: brosse,
    price:  115,
    rate:4
},

{
    name: 'coffret-argilo-argan',
    category: 'coffret',
    brand : 'argilo',
    id: '4',
    cover: coffret,
    price: 89,
    rate:5,
},
{
    name: 'coffret-argilo-l-aloe-vera',
    category: 'coffret',
    brand : 'argilo',
    id: '5',
    cover: coffret1,
    price: 89,
    rate:5,
},
{
    name: 'deodorant-homme-dry-impact-anti-transpirant',
    category: 'deodorant',
    brand : 'NIVEA',
    id: '7',
    cover: deodorant,
    price: 14,
    rate:4
},	


]

export default dataList;
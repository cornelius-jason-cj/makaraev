export const NAV_LINKS = [
    { href:  '#home', key: 'home', label: 'Home'},
    { href:  '#list_of_services', key: 'list_of_services', label: 'List of services'},
    { href:  '#clients', key: 'clients', label: 'Clients'},
    { href:  '#contact_us', key: 'location', label: 'Location'},
    { href:  '#contact_us', key: 'contact_us', label: 'Contact us'},
];

export const PROBLEMS_LIST = [
    {
        label: 'Limited Performance',
        icon: '/problems/gauge.png',
        desc: 'Older golf carts are fitted with traditional motors that lack the efficiency and power of modern BLDC motors. Consequently, this result in slower acceleration, a lower top speed and diminished overall performance.'
    },
    {
        label: 'Short Battery Life',
        icon: '/problems/battery.png',
        desc: 'Conventional lead-acid batteries, commonly employed in older golf carts, exhibit limited capacity and shorter lifespans. Consequently, this leads to a restricted driving range and necessitates frequent battery replacements, resulting in downtime and additional expenses.'
    },
    {
        label: 'Inefficient Energy Consumption',
        icon: '/problems/inefficient.png',
        desc: 'Traditional motors and batteries exhibit lower energy efficiency, leading to increased energy consumption and rising operating costs over time.'
    },
    {
        label: 'Short Tire Life',
        icon: '/problems/ban.png',
        desc: 'Using tires designed specifically for grass on the road will significantly reduce their lifespan.'
    },
];

export const BLDC_LIST = [
    {
        label: 'BLDC MOTOR',
        desc: 'BLDC (Brushless DC) Motors offer efficient and precise control of rotational motion,providing smoother acceleration, higher speeds, and enhanced overall performancecompared to traditional motors.'
    },
    {
        label: 'PROGRAMMABLE CONTROLLER',
        desc: 'A programmable BLDC Controller enables precise customization of motor performance,speed, and responsiveness, thereby enhancing the efficiency and adaptability ofelectric vehicles.'
    },
    {
        label: 'LITHIUM BATTERY',
        desc: 'Lithium batteries, in comparison to SLA batteries, offer higher energy density, longer lifespan, faster charging capabilities, and reduced weight, providing a more efficient and reliable power source for various applications.'
    },
];

export const COMPARE_LIST= [
    {
        title: '',
        desc_1: 'LEAD ACID',
        desc_2: 'LITHIUM',
    },
    {
        title: 'Price',
        desc_1: '$',
        desc_2: '$$$',
    },
    {
        title: 'Long Term Cost',
        desc_1: '$$$$',
        desc_2: '$',
    },
    {
        title: 'Runtimes',
        desc_1: 'Standard',
        desc_2: 'Longest',
    },
    {
        title: 'Charge Cycles',
        desc_1: '300',
        desc_2: '3000+',
    },
    {
        title: 'Charge Time',
        desc_1: '8-16 Hours',
        desc_2: '3-6 Hours',
    },
    {
        title: 'Lifespan',
        desc_1: '1-2 Years',
        desc_2: '10+ Years',
    },
    {
        title: 'Safety',
        desc_1: 'Least safe',
        desc_2: 'Safest',
    },
    {
        title: 'Maintenance',
        desc_1: 'Most Maintenance',
        desc_2: 'No Maintenance',
    },
];

export const MAKARA_SOLUTIONS = [
    {
        icon: '/solutions/service.png',
        label: 'Service Maintenance'
    },
    {
        icon: '/solutions/rental.png',
        label: 'Buggy Rental'
    },
    {
        icon: '/solutions/bldc.png',
        label: 'BLDC Motor Conversion'
    },
    {
        icon: '/solutions/parts.png',
        label: 'Spare Parts'
    },
    {
        icon: '/solutions/tire.png',
        label: 'Tier Replacement'
    },
    {
        icon: '/solutions/roof.png',
        label: 'Roof Replacement'
    },
    {
        icon: '/solutions/seatcover.png',
        label: 'Seat Cover'
    },
    {
        icon: '/solutions/seatext2.png',
        label: 'Seat Extension'
    },
    {
        icon: '/solutions/buysell.png',
        label: 'Buy & Sel'
    },
    {
        icon: '/solutions/customize.png',
        label: 'Customize'
    },
    {
        icon: '/solutions/lithium.png',
        label: 'Lithium Battery Replacement'
    }
];

export const PRICE_LIST = [
    {
        type: 'Basic',
        desc: 'BLDC Motor, Programmable Controller and Lithium Battery',
        option: 'Starts from',
        price: '55.000.000'
    },
    {
        type: 'Full Custom',
        desc: 'BLDC Motor, Programmable Controller and Lithium Battery, Custom rims and Tire, New Paint Job',
        option: 'Starts from',
        price: '75.000.000'
    },
    {
        type: 'Basic',
        desc: 'BLDC Motor, Programmable Controller and Lithium Battery, Custom rims and Tire, New Paint Job, Used frames',
        option: 'Starts from',
        price: '105.000.000'
    },
    {
        type: 'Lithium Battery',
        desc: '48 Volt 100 AH Battery, Smart BMS for monitoring, Quick Charging, Display',
        option: 'Starts from',
        price: '19.000.000'
    }
];

export const CLIENT_LIST_A = [
    {
        icon: '/hotel/natadesa.png',
    },
    {
        icon: '/hotel/renaissance.png',
    },
    {
        icon: '/hotel/ayana.png',
    },
    {
        icon: '/hotel/bvlgari.png',
    },
];

export const CLIENT_LIST_B = [
    {
        icon: '/hotel/villa_air.jpg',
    },
    {
        icon: '/hotel/seres.png',
    },
    {
        icon: '/hotel/vivara.png',
    },
];


export const FOOTER_LINKS = [
    {
      title: 'Learn More',
      links: [
        'About Makara',
        'Press Releases',
        'Environment',
        'Jobs',
        'Privacy Policy',
        'Contact Us',
      ],
    },
    {
      title: 'Our Community',
      links: ['Golf xixixi', 'Hospitality xoxo', 'Golf haha'],
    },
];
  
export const FOOTER_CONTACT_INFO = {
    title: 'Contact Us',
    links: [
        { label: 'Admin Officer', value: '123-456-7890' },
        { label: 'Email Officer', value: 'admin@makara.co.id' },
    ],
};

  
export const FOOTER_ADDRESS_INFO = {
    title: 'Address',
    links: [
        { label: 'Office', value: 'Unit 1D, Jimbaran Hub. Jl. Karang Mas, Jimbaran' },
        { label: 'Workshop', value: 'Jl. Pulau Ayu No. 1, Denpasar' },
    ],
};
  
export const SOCIALS = {
    title: 'Social',
    links: [
        '/facebook.svg',
        '/instagram.svg',
        '/twitter.svg',
        '/youtube.svg',
    ],
};
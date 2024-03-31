const menus = [
    {
        id: 1,
        name: 'Home',

        links: '/',
    },
    {
        id: 2,
        name: 'About',

        links: '/about-v1',
    },
    {
        id: 3,
        name: 'Avenues',

        links: '#',
        namesub: [
            {
                id: 1,
                sub: 'About v1',
                links: '/about-v1'
            },
            {
                id: 2,
                sub: 'About v2',
                links: '/about-v2'
            },
        ]
    },
    {
        id: 4,
        name: 'Road Map',
        links: '#',
        namesub: [
            {
                id: 1,
                sub: 'Road Map v1',
                links: '/roadmap-v1'
            },
            {
                id: 2,
                sub: 'Road Map v2',
                links: '/roadmap-v2'
            },
            {
                id: 3,
                sub: 'Road Map v3',
                links: '/roadmap-v3'
            },

        ],
    },
    {
        id: 5,
        name: 'Pages',
        links: '#',
        namesub: [
            {
                id: 1,
                sub: 'Sign in ',
                links: '/signin'
            },
            {
                id: 2,
                sub: 'Sign up',
                links: '/signup'
            },
            {
                id: 3,
                sub: 'Faq v1',
                links: '/faq-v1'
            },
            {
                id: 4,
                sub: 'Faq v2',
                links: '/faq-v2'
            },
            {
                id: 5,
                sub: 'Our Team',
                links: '/our-team'
            },
            {
                id: 6,
                sub: 'Collection',
                links: '/collection'
            },
            {
                id: 7,
                sub: 'Testimonial',
                links: '/testimonial'
            },
            {
                id: 8,
                sub: 'Item Details',
                links: '/item-details'
            },
            {
                id: 9,
                sub: 'Comming Soon',
                links: '/comming-soon'
            },
            {
                id: 10,
                sub: 'Page 404',
                links: '/page-404'
            },
        ],
    },
    {

        id: 4,
        name: 'Blog',
        links: '/blog',
    },

    {
        id: 5,

        name: 'Contact Us',
        links: '/contact',
    },
    
]

export default menus;
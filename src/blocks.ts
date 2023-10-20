export type BlockId = string;

export type BlockType = 'PlainText' | 'Image' | 'Layout' | 'Column';

export type Block = {
  id: BlockId;
  type: BlockType;
  options?: Record<string, string>;
  data?: Record<string, string | number>;
  children?: Block[];
};

export const blocks: Block = {
  type: 'Column',
  id: '5fprgzZ56EuHSb7m4Kk5tr',
  options: {},
  children: [
    {
      id: 'Pfmow4b9GAY',
      type: 'Image',
      options: {
        url: 'https://images.unsplash.com/photo-1640622308122-b1b0f3cd5a7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        align: 'center',
        width: '100%',
      },
      children: [],
      data: {
        description: 'Person using a laptop',
        width: 2070,
        height: 1380,
        createdAt: '2021-10-06T07:16:37.000Z',
      },
    },
    {
      id: '4iJ6TVs3DIg',
      type: 'Image',
      options: {
        url: 'https://images.unsplash.com/photo-1648492678772-8b52fe36cebc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        align: 'center',
        width: '100%',
      },
      children: [],
      data: {
        description: 'Durdle door in the Jurassic coast',
        width: 1770,
        height: 1180,
        createdAt: '2021-11-11T07:16:37.000Z',
      },
    },
    {
      type: 'PlainText',
      id: 'ea3rb4fdUAjbeestD9bmKc',
      options: {},
      children: [],
      data: {
        text: 'Nam dictum felis id metus tristique sollicitudin eu commodo sapien. Sed ornare egestas justo, sollicitudin tristique ipsum lobortis at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      },
    },
    {
      type: 'Column',
      id: 'hgasjkdhgajksdhhkjhasd',
      options: {},
      children: [
        {
          id: 'bh2FphERL-U',
          type: 'Image',
          options: {
            url: 'https://images.unsplash.com/photo-1648568714430-7092fa3377a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            align: 'center',
            width: '100%',
          },
          children: [],
          data: {
            description: 'Dog running through a field',
            width: 1770,
            height: 1180,
            createdAt: '2021-08-20T07:16:37.000Z',
          },
        },
        {
          type: 'PlainText',
          id: 'ea3rb4fdUAjbeestD9bmKc',
          options: {},
          children: [],
          data: {
            text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam dictum felis id metus tristique sollicitudin eu commodo sapien. Sed ornare egestas justo, sollicitudin tristique ipsum lobortis at.\n',
          },
        },
        {
          id: 'CVNt6d2Nw9s',
          type: 'Image',
          options: {
            url: 'https://images.unsplash.com/photo-1648582218213-d8565d505b17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80',
            align: 'center',
            width: '100%',
          },
          children: [],
          data: {
            description: 'Palm tree',
            width: 770,
            height: 1161,
            createdAt: '2022-03-21T07:16:37.000Z',
          },
        },
        {
          id: 'SS3X93PEhkE',
          type: 'Image',
          options: {
            url: 'https://images.unsplash.com/photo-1648663056174-1b93124c6000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
            align: 'center',
            width: '100%',
          },
          children: [],
          data: {
            description: 'Blue cocktail',
            width: 987,
            height: 1481,
            createdAt: 2022,
          },
        },
        {
          id: 'gcaMYcvCtR8',
          type: 'Image',
          options: {
            url: 'https://images.unsplash.com/photo-1648547569334-685b4a1e8cea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
            align: 'center',
            width: '100%',
          },
          children: [],
          data: {
            description: 'Cabin near the lake',
            width: 1064,
            height: 1330,
            createdAt: '2022-01-17T07:16:37.000Z',
          },
        },
        {
          id: 'b_wjyIm8BbY',
          type: 'Image',
          options: {
            url: 'https://images.unsplash.com/photo-1645389086835-8ee3ec1febfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
            align: 'center',
            width: '100%',
          },
          children: [],
          data: {
            description: 'Person in underground tunnel',
            width: 1035,
            height: 1380,
            createdAt: '2021-08-17T07:16:37.000Z',
          },
        },
      ],
    },
    {
      type: 'Column',
      id: 'hgasjkdhgajksdhhkjhasdada213',
      options: {},
      children: [
        {
          id: 'rI0XaLsh8qw',
          type: 'Image',
          options: {
            url: 'https://images.unsplash.com/photo-1648635546517-eeb9f381cadd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
            align: 'center',
            width: '100%',
          },
          children: [],
          data: {
            description: 'Road to nowhere',
            width: 1064,
            height: 1330,
            createdAt: '2021-06-17T07:16:37.000Z',
          },
        },
        {
          id: 'MPRozY1KVT4',
          type: 'Image',
          options: {
            url: 'https://images.unsplash.com/photo-1648646549682-2147f1211d58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
            align: 'center',
            width: '100%',
          },
          children: [],
          data: {
            description: 'Super car parked in garage',
            width: 987,
            height: 1481,
            createdAt: '2021-06-17T07:16:37.000Z',
          },
        },
      ],
    },
  ],
};

export const getBlocks = () =>
  new Promise<Block>((res) => setTimeout(() => res(blocks), 500));

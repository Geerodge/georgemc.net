import { AiOutlineStar as icon } from 'react-icons/ai';

export default {
    name: 'review',
    title: 'Reviews',
    type: 'document',
    icon,
    fields: [
        {
            name: 'reviewer',
            title: 'Name/Reviewer',
            type: 'string',
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string',
        },
        {
            name: 'review',
            title: 'Review',
            type: 'text',
        },
    ],
    preview: {
        select: {
          title: 'reviewer',
          media: 'image',
        },
      },
}

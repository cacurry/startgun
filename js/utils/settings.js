import whistle from '../../assets/whistle.png';
import voice from '../../assets/voice.png';
export const fields = [
    {
        title: 'HOLD TIME',
        key: 'holdTime',
        type: 'slider',
        min: 1.5,
        max: 2.5
    }, {
        title: 'EVENT',
        key: 'event',
        type: 'select',
        options: [
            {
                title: 'DISTANCE'
            }, {
                title: 'SPRINTS'
            }
        ]
    }, {
        title: 'SOUND',
        key: 'sound',
        type: 'select',
        options: [
            {
                title: 'Whistle',
                image: whistle
            }, {
                title: 'Voice',
                image: voice
            }
        ]
    }
];
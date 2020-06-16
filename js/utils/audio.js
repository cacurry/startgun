import Sound from 'react-native-sound';
const audios = {
    marks: 'marks.wav',
    set: 'set.wav',
    go: 'go.mp3',
    whistle: 'whistle.mp3'
};
Sound.setCategory('Playback');
export async function play(audio) {
    return await new Promise(function (resolve) {
        const sound = new Sound(audios[audio], Sound.MAIN_BUNDLE, error => {
            if (error) {
                console.log("Error while playing sound ",error);
                resolve();
                return;
            }
            sound.play(success => {
                if (success) {
                   console.log("Audio Success",audio,success);
                } else {
                    console.log("Audio Error",audio,success);
                }
                resolve();
                sound.stop(() => {
                    sound.release();                    
                });
                
            });
        });
    });
}
async function test() {
    await play('marks');
    await play('set');
    await play('go');
}
//test();
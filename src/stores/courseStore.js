import {EventEmitter} from 'events';


class courseStore extends EventEmitter{
    addChangeListener(callback){
        this.on("change", callback);
    }


}
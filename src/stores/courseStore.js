import {EventEmitter} from 'events';
import Dispatcher from '../appDispatcher';

const CHANGE_EVENT = "change";
class CourseStore extends EventEmitter{
    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange(){
        this.emit(CHANGE_EVENT);
    }
}

Dispatcher.register(action=> {
    switch(action.actonTYpe){
        
    }
})
const store = new CourseStore ();
export default store;

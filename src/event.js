/** 
 * This file is part of event0.js 
 * 
 * Copyright 2013 Alvaro Santamaria Herrero (aluarosi)
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */


/**
SUMMARY:
    We deal with events, emitters, receivers and listeners.
    Both emitter and receiver are objects. When certain conditions happen
    in a emitter object, this emits an event, which is a message sent through
    a listener function. 
    The event has:
        * event_type. Listeners register or 'subcribe' for a type of event;
        * event_data (the message itself, it can be a reference to an object).
    When an event of event_type is emitted, all the functions previously 
    registered for that event_type are called sequentially, with event_data
    as an argument. A reference to the event_emitter is also passed to the 
    listener function (wether as an additional argument or injected into the 
    function as the 'this' variable).
    The listener can be bounded to the emitter object (as usual in other framework
    as jquery and nodejs) or to the receiver object with extended methods 
    (addListenerX() and its equivalent onX()).
    
    **Case 1** (Like in jquery and nodejs. Listener bounded to emitter).
    EMITTER-(calls)->listener()                                    RECEIVER
    The listener is bounded to the emitter, as if it were a method.
    The receiver would be called indirectly if it is an object, but often 
    it is a closure context.
    
    **Case 2** (extended. Listener bounded to receiver).
    EMITTER-(calls)----------------------------------->listener()->RECEIVER
    The listener is now a method of the RECEIVER.
    This case makes it easier to call a listener when it is a method 
    of other object.
 */

EVENT0.EventEmitter = function(){
}

EVENT0.EventEmitter.prototype.addListener = function(event_data){
/**
 * Adds listener bounded to the emitter object:
 *   'this' inside this function will be bounded to the event emiiter
 *   as usual in other js frameworks (jquery, nodejs).
 */

}
EVENT0.EventEmitter.prototype.on = EVENT0.EventEmitter.prototype.addListener;


EVENT0.EventEmitter.prototype.addListenerX = function(event_emitter, event_data){
/** 
 * Adds listener bounded to the receiver object:
 *   'this' inside this function will be bounded to the event emiiter.
 *   The receiver function must previously be linked to the receiver object
 *   by using the receiver_function.bind(receiver_object) method.
 *   In this case, the emitter passes a reference to itself as the 
 *   1st parameter of the function. 
 */

}
EVENT0.EventEmitter.prototype.onX = EVENT0.EventEmitter.prototype.addListenerX;


EVENT0.EventEmitter.prototype.emit = function(event_type, event_data){
/**
 * When events are emitted, the listeners are called differentely 
 *  depending on how they have been registered. 
 *  Listeners registered in the usual way - with addListener() or on() - 
 *  are called:
 *      listener.call(this, event_data) 
 *  where 'this' is the event emitter injected into the listener function.
 *  Listeners registered in the "extended" way - with addListenerX() or onX() -
 *  are called:
 *      listener(event_emitter, event_data)
 */ 


}
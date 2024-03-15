'use client';

import { useAppDispatch, useAppSelector } from '@/store-redux';
import { addOne, initCounterState, resetCounter, subtractOne } from '@/store-redux/counter/CounterSlice';
import { useEffect } from 'react';

export interface CartCounterProps {
    value?: number,
}

export interface CounterResponse {
    method: string,
    counter: number,
}

const getApiCounter = async () => {
    const data = await fetch('/api/counter').then(res => res.json());
    return data as CounterResponse
}

export const CartCounter = ({ value = 10 }: CartCounterProps) => {

    // const [counter, setCounter] = useState(value);

    const counter = useAppSelector(state => state.counter.count);
    const dispatch = useAppDispatch();

    // useEffect(() => {
    //     dispatch(initCounterState(value))
    // }, [counter, dispatch]);

    useEffect(() => {
        getApiCounter()
            .then(({ counter }) => dispatch(initCounterState(counter)))
    }, [dispatch]);



    return (
        <>
            <span className="text-9xl"> {counter} </span>

            <div className="flex">
                <button
                    onClick={() => dispatch(addOne())}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
                    +1
                </button>

                <button
                    onClick={() => dispatch(subtractOne())}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
                    -1
                </button>
            </div>
        </>
    )
}

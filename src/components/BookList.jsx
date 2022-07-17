import { useState, useEffect } from 'react';
import * as API from '../services/data';
import {BookItem} from './BookItem';
import {Flex,Center,Image} from '@chakra-ui/react';
import loading from '../img/loading-icon.gif';

export function BookList(){


    const [books, setBooks] = useState([]);

    useEffect(() => {
        API.getBooks().then(setBooks);
    })

    return (
        <>

            {books.length == 0 ? (<Center><Image src={loading} /></Center>):(
            <section>
                <Flex direction='column'>
                {
                    books.map(book => (
                        <BookItem key={book.ID} {...book} />
                    ))
                }
                </Flex>
            </section> 
        
            )}
        </>
    )
}
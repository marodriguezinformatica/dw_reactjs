import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import * as API from '../services/data';
import loading from '../img/loading-icon.gif';
import {Heading,Center,Image,Flex} from '@chakra-ui/react';
import {BookItem} from '../components/BookItem';

export function BookSearchList(){

    let params = useParams();

    const [books, setBooks] = useState([]);

    useEffect(() => {
        API.getBookSearch(params.word).then(setBooks);
    },[books]);

    return (
    <>
        <Heading as='h1' size='xl'>Resultados de la búsqueda de: {params.word}</Heading>
        {books.length == 0?
        (<Center><Image src={loading} /></Center>):
        (<section>
            <Flex direction='column'>
                {books.map(book => (
                    <BookItem key={book.ID} {...book} />
                ))}
            </Flex>    
        </section>)    
        }
    </>
    )
}
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import * as API from '../services/data';
import {Box,Flex,Image,Center} from '@chakra-ui/react';
import loading from '../img/loading-icon.gif';

export function BookDetail(id){

    let params = useParams();

    const [book, setBook] = useState([]);

    useEffect(() => {
        API.getBookDetail(params.bookId).then(setBook);
    },[book]);

    return (
        

            <Box mt='50'>
                <Box mt='6' borderWidth='1px' borderRadius='lg' p='6'>
                    {!book[0]?(<Center><Image src={loading} /></Center>):(
                    <>
                        <Flex mb='2'>
                            <Box w='20%' color='gray.400'>Title:</Box>
                            <Box w='80%'>{book[0].title}</Box>
                        </Flex>
                        <Flex mb='2'>
                            <Box w='20%' color='gray.400'>Author:</Box>
                            <Box w='80%'>{book[0].author}</Box>
                        </Flex>
                        <Flex mb='2'>
                            <Box w='20%' color='gray.400'>Publisher:</Box>
                            <Box w='80%'>{book[0].publisher}</Box>
                        </Flex>
                        <Flex mb='2'>
                            <Box w='20%' color='gray.400'>Publisher date:</Box>
                            <Box w='80%'>{book[0].publisher_date}</Box>
                        </Flex>
                        <Flex mb='2'>
                            <Box w='20%' color='gray.400'>Pages:</Box>
                            <Box w='80%'>{book[0].pages}</Box>
                        </Flex>
                        <Flex mb='2'>
                            <Box w='20%' color='gray.400'>Language:</Box>
                            <Box w='80%'>{book[0].language}</Box>
                        </Flex>
                        <Flex mb='2'>
                            <Box w='20%' color='gray.400'>Categories:</Box>
                            <Box w='80%'>{book[0].categories.map(categorie => (
                                categorie.name+" "
                            ))}</Box>
                        </Flex>
                        <Flex mb='2'>
                            <Box w='20%' color='gray.400'>Link:</Box>
                            <Box w='80%'><a href={book[0].url_download} target='_blank'>{book[0].url_download}</a></Box>
                        </Flex>
                        <Flex mb='2'>
                            <Box w='20%' color='gray.400'>Link:</Box>
                            <Box w='80%'>{book[0].content}</Box>
                        </Flex>
                        <Center><Image src={book[0].cover} width='300px' borderRadius='lg' mt='6' /></Center>
                         
                    </>
                    )}
                </Box>
            </Box>
            
            

        
    )
}
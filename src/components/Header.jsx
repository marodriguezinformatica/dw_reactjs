import logo from '../img/openlibra-logo.png';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import { Flex, Image, Input, InputGroup, InputRightElement, Box } from '@chakra-ui/react'
import {FaSearch} from "react-icons/fa";


export function Header(){

    const [word, setWord] = useState([]);

    return(
        <>
            <Flex
                w='100%'
                h='70px'
                p='6px'
                align='center'
                justify='flex-start'
                bgColor='#2B6CB0'
                color='white'>

                    <Link to={'/'}>
                        <Image src={logo} h='50px' />
                    </Link>
                <Box w='500px'>
                    <InputGroup>
                        <Input size='sm' ml='10' bgColor='white' color='black' onChange={event => setWord(event.target.value)}/>
                        <InputRightElement children={<Link to={'/search/'+word}><FaSearch cursor='pointer' color='black' /></Link>} />
                    </InputGroup> 
                </Box>

            </Flex>

        
        </>
    )

}
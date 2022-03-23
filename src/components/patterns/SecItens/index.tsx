import Link from 'next/link';
import { useEffect, useState } from 'react';
import Card from '../../Card';
import { Header, LinkA, List, Section, Seta, Title } from './style';

type ProductProps = {
    title: string;
    categoryLinkHref: string;
    products: {
        name: string;
        price: number;
        description: string;
        image: string;
    }[];
};


const SecItens = ({ title, categoryLinkHref, products }: ProductProps) => {
    return (
        <>
            <Section>
                <Header>
                    <Title>{title}</Title>
                    <Link href={categoryLinkHref} passHref>
                        <LinkA>Ver tudo
                            <Seta />
                        </LinkA>
                    </Link>
                </Header>
                <List>
                    {products.map((product, index) => (
                        <Card
                            key={index}
                            image={product.image}
                            price={product.price}
                            name={product.name}
                            id={index}
                            title={categoryLinkHref}
                        />
                    ))}
                </List>
            </Section>
        </>
    )
}

export default SecItens;


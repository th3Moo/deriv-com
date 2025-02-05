import React from 'react'
import Container from 'features/components/atoms/container'
import Typography from 'features/components/atoms/typography'
import LinkButton from 'features/components/atoms/link-button'
import Flex from 'features/components/atoms/flex-box'
import TradeItem, { TradeItemType } from 'features/components/molecules/trade-item'
import { Localize } from 'components/localization'
import { TString } from 'types/generics'
import { LinkUrlType } from 'features/types'

export type WhyTradeOptionsType = {
    heading: TString
    heading2: TString
    button: {
        text: TString
        url: LinkUrlType
    }
    items: TradeItemType[]
}

const WhyTradeOptions = ({ data }: { data: WhyTradeOptionsType }) => {
    return (
        <Container.Fixed
            as="section"
            bgcolor="black"
            padding_block="20x"
            md={{ padding_block: '40x' }}
        >
            <Container.Fluid>
                <Typography.Heading
                    as="h2"
                    textcolor="inverted"
                    align="center"
                    size="small"
                    mb="12x"
                    md={{ mb: '20x' }}
                >
                    <Localize translate_text={data.heading} />
                </Typography.Heading>
                <Flex.Box gap="12x" wrap="wrap" justify="center" md={{ gap: '20x' }}>
                    {data.items.map((item) => (
                        <TradeItem key={item.heading} data={item} />
                    ))}
                </Flex.Box>
                <Flex.Box direction="col" align="center" mt="12x" md={{ mt: '20x' }}>
                    <Typography.Heading as="h4" textcolor="inverted" size="xxs" mb="8x">
                        <Localize translate_text={data.heading2} />
                    </Typography.Heading>
                    <LinkButton.Primary url={data.button.url}>
                        <Localize translate_text={data.button.text} />
                    </LinkButton.Primary>
                </Flex.Box>
            </Container.Fluid>
        </Container.Fixed>
    )
}

export default WhyTradeOptions

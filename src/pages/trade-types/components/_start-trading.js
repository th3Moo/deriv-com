import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text, Header } from 'components/elements'
import Checklist from 'images/svg/checklist-red.svg'

const StyledItem = styled.div`
    display: flex;
    border-left: var(--color-red) dashed 1px;
    position: relative;
    height: 11rem;

    &:last-child {
        border-left: unset;
    }
`
const Container = styled.div`
    margin-left: 40px;
`
const Oval = styled(Checklist)`
    margin-right: 2.4rem;
    position: absolute;
    left: -12px;
`
const StartTrading = ({ children, ...props }) => {
    return (
        <div {...props}>
            {children.map((child, idx) => (
                <StyledItem key={idx}>
                    <Oval />
                    <Container>
                        <Header mb="0.8rem" mt="-5px" as="h4">
                            {child.props.title}
                        </Header>
                        <Text>{child}</Text>
                    </Container>
                </StyledItem>
            ))}
        </div>
    )
}
const Item = ({ children, ...props }) => <div {...props}>{children}</div>

StartTrading.Item = Item

Item.propTypes = {
    children: PropTypes.node,
}
StartTrading.propTypes = {
    children: PropTypes.node,
}

export default StartTrading

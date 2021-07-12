import React from 'react';

function RecipeTitle() {
    const title = 'Mashed potatoes';
    return (
        <h2>{ title }</h2>
    )
};


// TODO: Create RecipeTitle component
function RecipeTitle2(props) {
    return (
        <section>
            <h2>{ props.title }</h2>
        </section>
    )
};


export default {RecipeTitle,RecipeTitle2};

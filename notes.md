## Prelim
- Scrape story with fs
    -    

## Content Rendering Needs 
1. By column:
    - Text should be the same font size
    - Images need to be same width; not necessarily height
2. Whole Picture ("row" + "column"):
    - The *ideal* staggering effect
        * 1st col: img **below** text
        * 2nd col: just text
        * 3rd col: img **above** text
    - May have to deviate from this, but *even if 1 column deviates*, try to keep the other ones consistent
3. Animation
    - 1st col - fade in
        * ___Child Component___ - fade in vertically (should have same animation syntax)

## Prelim. React Thoughts
- Gatsby
- Layout component
    - Logic: 
        - Populate 3 x 3 react grid with text, images 
        - In doing so, make it so **components have unique row, column**
    - If props (whole component) (images exist)
        - Pass in rows (props) to logic for layout
    -  Else: Randomized rows logic (lifecycle function)
    - Addtl. Props: Offset margins for individual photos
    - Fade in text, have binary prop (cond. rendering): use/notuse; prop for speed of fade 
        - Might need whole child component for this to pass into
        - Prebuilt components ?
- parent component for trigger animation, pagination


## Layout
- Mustard yellow background
- Text elements overlap each other
- Simple vector drawing background
- Scale on 


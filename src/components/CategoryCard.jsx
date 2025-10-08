import React from 'react'
import '../style.css'

const CategoryCard = () => {
  return (
 <section className='Category-container'>
    <div className="container">
        <h1>Shop by Category</h1>
        <div className="categories">
            <div className="category-card">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
                <div className="category-name">Electronics</div>
            </div>

            <div className="category-card">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z"/>
                </svg>
                <div className="category-name">Fashion</div>
            </div>

            <div className="category-card">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 2h6l3 7-3 3V22H9V12L6 9z"/>
                    <path d="M12 12V2"/>
                </svg>
                <div className="category-name">Home & Living</div>
            </div>

            <div className="category-card">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 2a10 10 0 0010 10"/>
                    <path d="M2 12a10 10 0 0010 10"/>
                    <path d="M7 12a5 5 0 015-5"/>
                    <path d="M12 7a5 5 0 015 5"/>
                    <path d="M12 17a5 5 0 01-5-5"/>
                    <path d="M17 12a5 5 0 01-5 5"/>
                </svg>
                <div className="category-name">Sports</div>
            </div>
        </div>
    </div>
</section>
  )
}

export default CategoryCard

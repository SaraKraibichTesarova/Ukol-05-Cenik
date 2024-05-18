
const selectPlan = (planNumber) => {
    const elPlan1 = document.querySelector('#plan1')
    const elPlan2 = document.querySelector('#plan2')
    const elPlan3 = document.querySelector('#plan3')

    if(planNumber === 1) {
        elPlan1.classList.add('plan--selected')
        elPlan2.classList.remove('plan--selected')
        elPlan3.classList.remove('plan--selected')
    }
    else if(planNumber === 2) {
        elPlan2.classList.add('plan--selected')
        elPlan1.classList.remove('plan--selected')
        elPlan3.classList.remove('plan--selected')
    }
    else if(planNumber === 3) {
        elPlan3.classList.add('plan--selected')
        elPlan1.classList.remove('plan--selected')
        elPlan2.classList.remove('plan--selected')
    }
}

selectPlan(1)
selectPlan(2)
selectPlan(3)

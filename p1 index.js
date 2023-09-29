Assignments:
// 1.to calculate Simple Interest?

    let principal = Number(prompt("Enter principal amount"))
    let rate = Number(prompt("Enter rate of interest"))
    let time = Number(prompt("Enter time in hours"))

    alert((principal*rate*time)/100)


// 2. Area of circle, Volume of Cube?
 // for Area of circle 
    let radius =Number(prompt("Enter the radius of circle:"));
    let area = Math.PI * radius * radius;

    console.log("The area of the circle is:" +" "+ area);

 // for volume of cube
    let side_length = Number(prompt("Enter side length of cube"))
    let volume = side_length * side_length * side_length;

    console.log("The volume of cube is:" +" "+ volume)

// 3.To calculate surface area of a cylinder?
    let radius = Number(prompt("Enter radius of the cylinder"));
    let height = Number(prompt("Enter height of the cylinder"));
    let surface_area = 2 * Math.PI * radius (height + radius);

    console.log("The Surface area of cylinder is:" +" "+ surface_area)
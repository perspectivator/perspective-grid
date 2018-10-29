"use strict"

let draw = SVG('drawing').size(width.value, height.value);
// makes the SVG canvas according to the user-specified dimensions

Math.degrees = function(radians) {
  return radians * 180 / Math.PI;
};

Math.radians = function(degrees) {
  return degrees * Math.PI / 180;
};
// functions to turn radians into degrees and vice versa

function saveCube() {
  // this function saves all of the current settings
  localStorage.setItem("saved", "yes");
  // this item tells the load function whether or not any data has been saved in localstorage
  localStorage.setItem("width", document.getElementById("width").value);
  localStorage.setItem("height", document.getElementById("height").value);
  localStorage.setItem("FOV", document.getElementById("FOV").value);
  localStorage.setItem("fovhorizontal", document.getElementById("fovhorizontal").checked);
  localStorage.setItem("fovvertical", document.getElementById("fovvertical").checked);
  localStorage.setItem("fovslider", document.getElementById("fovslider").value);
  localStorage.setItem("tilt", document.getElementById("tilt").value);
  localStorage.setItem("linesbottom", document.getElementById("linesbottom").value);
  localStorage.setItem("colorbottom", document.getElementById("colorbottom").value);
  localStorage.setItem("tiltslider", document.getElementById("tiltslider").value);
  localStorage.setItem("leftangle", document.getElementById("leftangle").value);
  localStorage.setItem("linesleft", document.getElementById("linesleft").value);
  localStorage.setItem("colorleft", document.getElementById("colorleft").value);
  localStorage.setItem("rightangle", document.getElementById("rightangle").value);
  localStorage.setItem("linesright", document.getElementById("linesright").value);
  localStorage.setItem("colorright", document.getElementById("colorright").value);
  localStorage.setItem("angleslider", document.getElementById("angleslider").value);
  localStorage.setItem("rotation", document.getElementById("rotation").value);
  localStorage.setItem("linestopdvp", document.getElementById("linestopdvp").value);
  localStorage.setItem("colortopdvp", document.getElementById("colortopdvp").value);
  localStorage.setItem("rotationslider", document.getElementById("rotationslider").value);
  localStorage.setItem("linesleftdvp", document.getElementById("linesleftdvp").value);
  localStorage.setItem("colorleftdvp", document.getElementById("colorleftdvp").value);
  localStorage.setItem("linesrightdvp", document.getElementById("linesrightdvp").value);
  localStorage.setItem("colorrightdvp", document.getElementById("colorrightdvp").value);
  localStorage.setItem("linewidth", document.getElementById("linewidth").value);
  localStorage.setItem("dvplinewidth", document.getElementById("dvplinewidth").value);
  // all the values from the input fields are saved to localstorage.
  // the radio buttons have their .checked saved instead of .value
  return;
}

function loadCube() {
  // this function loads any saved settings
  if (localStorage.getItem("saved") == "yes") {
    // checks to see if anything has been saved
    document.getElementById("width").value = localStorage.getItem("width");
    document.getElementById("height").value = localStorage.getItem("height");
    document.getElementById("FOV").value = localStorage.getItem("FOV");
    if (localStorage.getItem("fovhorizontal") == "true") {
      document.getElementById("fovhorizontal").checked = localStorage.getItem("fovhorizontal");
    }
    else {
      document.getElementById("fovhorizontal").checked = 0;
    }
    if (localStorage.getItem("fovvertical") == "true") {
      document.getElementById("fovvertical").checked = localStorage.getItem("fovvertical");
    }
    else {
      document.getElementById("fovvertical").checked = 0;
    }
    // the radio buttons require special checks. The .checked value is originally a boolean
    // but it's turned into a string of "true" or "false" when saved in localstorage.
    // "false" will evaluate as true because all nonempty strings are true
    document.getElementById("fovslider").value = localStorage.getItem("fovslider");
    document.getElementById("tilt").value = localStorage.getItem("tilt");
    document.getElementById("linesbottom").value = localStorage.getItem("linesbottom");
    document.getElementById("colorbottom").value = localStorage.getItem("colorbottom");
    document.getElementById("tiltslider").value = localStorage.getItem("tiltslider");
    document.getElementById("leftangle").value = localStorage.getItem("leftangle");
    document.getElementById("linesleft").value = localStorage.getItem("linesleft");
    document.getElementById("colorleft").value = localStorage.getItem("colorleft");
    document.getElementById("rightangle").value = localStorage.getItem("rightangle");
    document.getElementById("linesright").value = localStorage.getItem("linesright");
    document.getElementById("colorright").value = localStorage.getItem("colorright");
    document.getElementById("angleslider").value = localStorage.getItem("angleslider");
    document.getElementById("rotation").value = localStorage.getItem("rotation");
    document.getElementById("linestopdvp").value = localStorage.getItem("linestopdvp");
    document.getElementById("colortopdvp").value = localStorage.getItem("colortopdvp");
    document.getElementById("rotationslider").value = localStorage.getItem("rotationslider");
    document.getElementById("linesleftdvp").value = localStorage.getItem("linesleftdvp");
    document.getElementById("colorleftdvp").value = localStorage.getItem("colorleftdvp");
    document.getElementById("linesrightdvp").value = localStorage.getItem("linesrightdvp");
    document.getElementById("colorrightdvp").value = localStorage.getItem("colorrightdvp");
    document.getElementById("linewidth").value = localStorage.getItem("linewidth");
    document.getElementById("dvplinewidth").value = localStorage.getItem("dvplinewidth");
    generateGrid();
    return;
  }
  resetCube();
  // if no settings are saved it returns the settings to default settings
  return;
}

function resetCube() {
  // this function returns the settings to the boring default settings
  document.getElementById("width").value = 660;
  document.getElementById("height").value = 510;
  document.getElementById("FOV").value = 25;
  document.getElementById("fovhorizontal").checked = false;
  document.getElementById("fovvertical").checked = true;
  document.getElementById("fovslider").value = 25;
  document.getElementById("tilt").value = 0;
  document.getElementById("linesbottom").value = 20;
  document.getElementById("colorbottom").value = "#0000FF";
  document.getElementById("tiltslider").value = 0;
  document.getElementById("leftangle").value = 45;
  document.getElementById("linesleft").value = 20;
  document.getElementById("colorleft").value = "#FF0000";
  document.getElementById("rightangle").value = 45;
  document.getElementById("linesright").value = 20;
  document.getElementById("colorright").value = "#00FF00";
  document.getElementById("angleslider").value = 45;
  document.getElementById("rotation").value = 0;
  document.getElementById("linestopdvp").value = 20;
  document.getElementById("colortopdvp").value = "#FFFF00";
  document.getElementById("rotationslider").value = 0;
  document.getElementById("linesleftdvp").value = 20;
  document.getElementById("colorleftdvp").value = "#FF00FF";
  document.getElementById("linesrightdvp").value = 20;
  document.getElementById("colorrightdvp").value = "#00FFFF";
  document.getElementById("linewidth").value = 1;
  document.getElementById("dvplinewidth").value = 0.25;
  generateGrid();
  return;
}

function randomCube() {
  // this function fills the input fields with random values
  // the values it generates have a more limited range than what the user can input
  // because the patterns just repeat and start over again past a certain point
  // the FOV, canvas size, and line settings are all unaffected
  document.getElementById("tilt").value = (Math.random() * 180) - 90;
  document.getElementById("tiltslider").value = document.getElementById("tilt").value;
  document.getElementById("leftangle").value = Math.random() * 90;
  document.getElementById("rightangle").value = 90 - document.getElementById("leftangle").value;
  document.getElementById("angleslider").value = document.getElementById("rightangle").value;
  document.getElementById("rotation").value = Math.random() * 360;
  document.getElementById("rotationslider").value = document.getElementById("rotation").value;
  generateGrid();
  return;
}

function checkValue(name) {
  // this function is called whenever an input field is changed
  // it ensures that the values entered are numbers within a certain range
  let x = document.getElementById(name);
  if (x.type == "color") {
    generateGrid();
    return;
  }
  // if it's a color it will just refresh the drawing
  if (isNaN(Number(x.value))) x.value = 0;
  // if it's not a number it's replaced with 0
  if (x.id == "fovslider") {
    document.getElementById("FOV").value = x.value;
    // ensures changes in the FOV slider are reflected in the FOV input field
    let event = document.createEvent("HTMLEvents");
    event.initEvent("change",true,false);
    document.getElementById("FOV").dispatchEvent(event);
    // this creates an onchange event for the FOV input field
    // I do this so it will check that the FOV field has a correct value,
    // which should always be the case except for when the slider reaches 0
  }
  if (x.id == "FOV") {
    document.getElementById("fovslider").value = x.value;
    // ensures changes in the FOV input field are reflected in the FOV slider
  }
  if (x.id == "tiltslider") {
    document.getElementById("tilt").value = x.value;
    // ensures changes in the tilt slider are reflected in the tilt input field
    let event = document.createEvent("HTMLEvents");
    event.initEvent("change",true,false);
    document.getElementById("tilt").dispatchEvent(event);
    // creates an onchange event for the tilt input field to check the input value
    // the slider should never create a disallowed value but I had it check in case
    // I changed that at any point
  }
  if (x.id == "tilt") {
    document.getElementById("tiltslider").value = x.value;
    // ensures changes in the tilt input field are reflected in the tilt slider
  }
  if (x.id == "angleslider") {
    document.getElementById("rightangle").value = x.value;
    // ensures changes in the angle slider are reflected in the right angle input field
    let event = document.createEvent("HTMLEvents");
    event.initEvent("change",true,false);
    document.getElementById("rightangle").dispatchEvent(event);
    // creates an onchange event so the right angle input field gets checked
    // during that check the left angle is changed so they form a 90 degree angle
  }
  if (x.id == "rotationslider") {
    document.getElementById("rotation").value = x.value;
    // ensures changes in the rotation slider are reflected in the rotation input field
    let event = document.createEvent("HTMLEvents");
    event.initEvent("change",true,false);
    document.getElementById("rotation").dispatchEvent(event);
    // creates an onchange event so the rotation input field gets checked
    // the slider shouldn't generate disallowed values but I keep it just in case
  }
  if (x.id == "rotation") {
    document.getElementById("rotationslider").value = x.value;
  }
  // ensures changes in the rotation input field are reflected in the rotation slider
  if (x.id == "width" && x.value <= 0) x.value = 1;
  if (x.id == "height" && x.value <= 0) x.value = 1;
  // ensures width and height aren't 0 or negative
  if (x.id == "FOV" && x.value <= 0) x.value = 0.01;
  if (x.id == "FOV" && x.value >= 180) x.value = 179.99;
  // ensures FOV isn't at 0 or 180 since 0 creates a blank canvas
  // and 180 is impossible to achieve in reality and might create errors
  if (x.id == "tilt" && x.value < -360) x.value = -360;
  if (x.id == "tilt" && x.value > 360) x.value = 360;
  // tilt is kept between -360 and 360. Higher and lower numbers wouldn't cause errors
  // but there's no point in going beyond 360 and the slider needs to be of finite length
  if (x.id == "linesbottom" && x.value < 0) x.value = 0;
  // ensures that I don't have a negative number of lines
  // all the line number input fields have this same check
  if (x.id == "leftangle" && x.value < -270) x.value = -270;
  if (x.id == "leftangle" && x.value > 450) x.value = 450;
  // the left angle goes from -270 to 450 because it's tied to the right angle
  // so that it equals 90 minus the right angle
  // the right angle goes from -360 to 360, resulting in values of 450 and -270
  if (x.id == "leftangle") {
    document.getElementById("rightangle").value = 90 - x.value;
    document.getElementById("angleslider").value = 90 - x.value;
  }
  // ensures the right angle is 90 minus the left angle when the left
  // angle is changed by the user
  if (x.id == "linesleft" && x.value < 0) x.value = 0;
  if (x.id == "rightangle" && x.value < -360) x.value = -360;
  if (x.id == "rightangle" && x.value > 360) x.value = 360;
  // ensures the right angle is between -360 and 360
  // once again there's no point going further and the slider needs to be
  // a finite length!
  if (x.id == "rightangle") {
    document.getElementById("leftangle").value = 90 - x.value;
    document.getElementById("angleslider").value = x.value;
  }
  // ensures the left angle equals 90 minus the right angle
  if (x.id == "linesright" && x.value < 0) x.value = 0;
  if (x.id == "rotation" && x.value < -360) x.value = -360;
  if (x.id == "rotation" && x.value > 360) x.value = 360;
  // ensures that rotation is between -360 and 360
  // same reason as with the right angle and the tilt
  if (x.id == "linestopdvp" && x.value < 0) x.value = 0;
  if (x.id == "linesleftdvp" && x.value < 0) x.value = 0;
  if (x.id == "linesrightdvp" && x.value < 0) x.value = 0;
  if (x.id == "linewidth" && x.value < 0) x.value = 0;
  if (x.id == "dvplinewidth" && x.value < 0) x.value = 0;
  generateGrid();
}

function findAngle(x1, y1, x2, y2, x3, y3) {
  // this function finds the angle made by the lines
  // passing through three points
  let a = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
  let b = (x2 - x3) * (x2 - x3) + (y2 - y3) * (y2 - y3);
  let c = (x3 - x1) * (x3 - x1) + (y3 - y1) * (y3 - y1);
  return Math.degrees(Math.acos((a + b - c) / Math.sqrt(4 * a * b)));
}

function findLength(x1, y1, x2, y2) {
  // this function finds the length between two points
  return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
}

function generateGrid() {
  let vp1x; let vp1y;
  let vp2x; let vp2y;
  let vp3x; let vp3y;
  let dvp1x; let dvp1y;
  let dvp2x; let dvp2y;
  let dvp3x; let dvp3y;
  // variables to store the x and y coordinates of the six vanishing points
  // if I started this project now I would have used objects with x and y attributes

  let fov = Number(document.getElementById("FOV").value);
  let width = Number(document.getElementById("width").value);
  let height = Number(document.getElementById("height").value);
  let tilt = Number(document.getElementById("tilt").value);
  let linesbottom = Number(document.getElementById("linesbottom").value);
  let colorbottom = document.getElementById("colorbottom").value;
  let leftangle = Number(document.getElementById("leftangle").value);
  let linesleft = Number(document.getElementById("linesleft").value);
  let colorleft = document.getElementById("colorleft").value;
  let rightangle = Number(document.getElementById("rightangle").value);
  let linesright = Number(document.getElementById("linesright").value);
  let colorright = document.getElementById("colorright").value;
  let fovrotation = Number(document.getElementById("rotation").value);
  let linestopdvp = Number(document.getElementById("linestopdvp").value);
  let colortopdvp = document.getElementById("colortopdvp").value;
  let linesleftdvp = Number(document.getElementById("linesleftdvp").value);
  let colorleftdvp = document.getElementById("colorleftdvp").value;
  let linesrightdvp = Number(document.getElementById("linesrightdvp").value);
  let colorrightdvp = document.getElementById("colorrightdvp").value;
  let linewidth = Number(document.getElementById("linewidth").value);
  let dvplinewidth = Number(document.getElementById("dvplinewidth").value);
  let fovhorizontal = document.getElementById("fovhorizontal").checked;
  let fovvertical = document.getElementById("fovvertical").checked;
  // putting the values from all the input fields into variables

  let diagonal = Math.sqrt(width * width + height * height);
  // diagonal is the diagonal length of the canvas, the longest possible straight line
  // that can be seen on the canvas, going from corner to corner

  let originx = width/2;
  let originy = height/2;
  // the origin is in the middle of the canvas
  // SVG coordinates start in the top left corner with x coordinates going right
  // and y coordinates going down
  let rad = fovhorizontal ? width/(2*Math.tan(Math.radians(fov/2)))
  : height/(2*Math.tan(Math.radians(fov/2)));
  // rad is the radius of the 90 degree circle of view which depends on the
  // field of view and canvas dimensions chosen by the user
  // it can be measured using either the width or height of the canvas, however
  // the user chooses
  // As for how it's done, we're trying to find the field of view encompassed by an
  // image of a certain size. The field of view equals the angle out to both sides
  // from the middle of the image. The middle of the image is called the direction of view.
  // The tangent function finds the ratio between the side opposite of and the side adjacent to an
  // angle in a right triangle. With our field of view, we can form a right triangle
  // by looking straight at the very center of the image (the direction of view). The adjacent side
  // would be a line from our eyes to the image, the opposite side a line from the direction of view to any border
  // of the image, and the hypotenuse a line from the border of the image back to our eyes. This angle
  // formed at the eyes is half of the field of view. It's only half because the opposite side of this
  // angle only encompasses half of the length of the image (either its height or width or something
  // inbetween depending on how it's oriented; for this program I only let the user orient it vertically
  // or horizontally). So I divide the opposite side (either half of the width or height) by the tangent
  // of the angle formed at the eyes when looking at the direction of view (this angle is half the field of
  // view) because this tangent is the ratio of the opposite side divided by the adjacent side. The opposite
  // sides cancel out, leaving us with the adjacent side, which is the distance from our eyes to the image.
  // This isn't the real distance (obviously since you can move your head) but rather how far away you would
  // need to be from the image for it to encompass the given field of view when looking at the middle of the
  // image, the direction of view.
  // This viewing distance is equal to the radius of the 90 degree circle of view because if your field of view
  // is 90 degrees, the angle at the eyes is 45 degrees. At 45 degrees tangent equals 1, meaning
  // the opposite and adjacent sides are equal, meaning the distance from the center of view to the side equals
  // the viewing distance. That distance from the center of view to the side can be drawn out in any direction,
  // creating a circle of which it is the radius. So this circle, which encompasses a 90 degree field of view on all
  // sides, is the 90 degree circle of view.

  function setVp1() {
    vp1x = originx;
    vp1y = originy + Math.tan(Math.radians(90 - tilt)) * rad;
  }
  // the first vanishing point is created by the tilt of the horizon. If the horizon is tilted
  // up 20 degrees from the center of view (the middle of the image), then this vanishing point
  // will be tilted down 70 degrees from the center of view: they form a 90 degree angle.
  // This is the case because the horizon is the vanishing line for a flat plane (the ground plane).
  // When lines extend out into infinity they vanish into a vanishing point, and when planes extend
  // out for infinity they vanish into a vanishing line. All lines parallel to a given line will vanish
  // to the same point, and all planes parallel to a given plane will vanish to the same line. So this
  // first vanishing point is the vanishing point for all the lines perpendicular to the ground plane,
  // and so it is oriented 90 degrees away from the horizon.

  // To understand further, we have to clarify that when we're working with perspective, what we're
  // creating is a flat projection of a three dimensional scene. If you took a piece of glass and held
  // it very still without moving your head and traced whatever you saw through it onto the surface of
  // the glass with a marker, you would be making a flat projection of a three dimensional scene.
  // If you saw a dot through the glass and then drew that dot onto the glass, it would be located
  // at the point where a line going from the dot to your eyes intersected the pane of glass. Any
  // line like this that goes to your eyes is called a visual ray. Despite being
  // a line, it appears as a single point because we are seeing it straight on. Similarly, if a plane
  // intersects your eyes, it appears as a line.
  // The vanishing point for a line (or set of parallel lines) appears where a line parallel to that
  // line would also be a visual ray (so it appears to be a point). Similarly, the vanishing line
  // for a plane appears where a parallel plane would intersects with your eyes (so it appears to be
  // a line). These parallel lines and planes appear on the image where they intersect with the image, so
  // we just have to find where they intersect the image to find where the vanishing points and lines should be.

  // Let's say the horizon is tilted up 20 degrees. This means that the vanishing line would be made by a plane
  // intersecting with our eyes that is tilted up 20 degrees from the center of view. We can then imagine
  // a line going straight along the middle of this plane to the image, and we now have a
  // right triangle formed from our line in the plane, a line going from our eyes to the center of view, and a
  // line going up from the center of view to where our plane line meets the image.
  // The tangent of 20 will equal the ratio of the distance from the center of view to the vanishing line
  // (the opposite side) over the distance to our image (the adjacent side). The distance to the image is
  // equal to the radius of the 90 degree circle of view, which we've already calculated. If I multiply this
  // ratio by the distance to our image, I will get the distance from the center of view to the vanishing line.
  // The plane has only been tilted up, not side to side, so the horizon is horizontal. I could then draw
  // a horizontal line at the calculated distance above the center of view to draw the horizon (the program
  // doesn't draw the horizon, though).
  // We can then use the exact same process to find the first vanishing point. We find the tangent of
  // 70 (it's perpendicular to the ground plane so they're oriented 90 degrees from each other)
  // and multiply it by the distance to our image, giving the distance below the center of view to the
  // vanishing point. In the equation it's added rather than subtracted because with SVG coordinates the
  // y coordinate increases as you go down.

  function setVp2() {
    vp2x = originx - rad * Math.tan(Math.radians(leftangle))/Math.cos(Math.radians(tilt));
    vp2y = originy - rad * Math.tan(Math.radians(tilt));
  }

  // the second and third vanishing points work the same way, one just goes to the left and
  // the other goes right. If there is no horizon tilt, we can find these points using the
  // same method we used to find the first vanishing point, just using the left or right angle
  // instead of 90 minus the horizon tilt, and this would give us the distance left or right to
  // these vanishing points. If the horizon is tilted, though, this doesn't work because
  // the angles given are no longer the angles from the center of view, they're the angles
  // from the middle of the horizon. So when we find the tangent of our left or right angle,
  // the adjacent side in the ratio is no longer the distance to the center of view, it's the distance
  // to the middle of the horizon. The opposite side is then the distance to the left or the right
  // from the middle of the horizon. So we just have to multiply the distance to the middle of the horizon
  // by the tangent of our angle to the left or right to get the distance to the left or right from the
  // middle of the horizon to our vanishing point.

  // We can find the distance to the middle of the horizon by using the cosine of the horizon tilt angle.
  // The cosine is the ratio of the adjacent side over the hypotenuse. The adjacent side using the tilt
  // angle is the distance to the image (equal to the radius of the 90 degree circle of view) and the
  // hypotenuse is the distance to the middle of the horizon. We need the hypotenuse on top and the
  // adjacent side on the bottom, so we invert the cosine by dividing 1 by the cosine.
  // We can then multiply this ratio of hypotenuse over adjacent side by the adjacent side (the radius of the
  // 90 degree circle of view, which we've already calculated) to get the hypotenuse, which is the distance to the
  // middle of the horizon. We then multiply that by the tangent of the angle to the left or right to get the
  // distance left or right from the middle of the horizon to the vanishing point.

  function setVp3() {
    vp3x = originx + rad * Math.tan(Math.radians(rightangle))/Math.cos(Math.radians(tilt));
    vp3y = originy - rad * Math.tan(Math.radians(tilt));
  }

  function setDvp1() {
    if (rightangle > 0) {
      if (rightangle % 180 < 90) {
        dvp1x = originx + rad * Math.tan(Math.radians(rightangle - 45))/Math.cos(Math.radians(tilt));
      }
      else {
        dvp1x = originx + rad * Math.tan(Math.radians(rightangle + 45))/Math.cos(Math.radians(tilt));
      }
    }
    if (rightangle < 0) {
      if (rightangle % 180 > -90) {
        dvp1x = originx + rad * Math.tan(Math.radians(rightangle + 45))/Math.cos(Math.radians(tilt));
      }
      else {
        dvp1x = originx + rad * Math.tan(Math.radians(rightangle - 45))/Math.cos(Math.radians(tilt));
      }
    }
    dvp1y = originy - rad * Math.tan(Math.radians(tilt));
  }

  // The first diagonal vanishing point is between vanishing points two and three. The same procedure is used to
  // find it as to find them, we just need to use an angle that's between them. The obvious way to do this is to
  // subtract 45 degrees from one of the angles (since they're always 90 degrees apart) and then calculate the
  // distance to the right or left (I use the right angle, so to the right). Unfortunately, once the right angle
  // goes beyond 90 degrees or under 0 degrees, this angle will be to one side of the two vanishing points rather
  // than between them. This happens because at 90 degrees, the vanishing point doesn't exist (because the lines are
  // parallel to the image, so they never intersect it at a point) and past 90 degrees it reappears, but on the other
  // side. If you go another 90 degrees, though, the diagonal vanishing point will once again be between the two
  // vanishing points because the left vanishing point moves to the other side.
  // So, when this change happens (when a vanishing point moves from one side to the other every 90 degrees) we need
  // to switch from subtracting 45 degrees to adding 45 degrees to ensure that we're calculating
  // the diagonal vanishing point that's between the two vanishing points.
  // I use the remainder operator (%) with 180 because the pattern repeats every 180 degrees, so we start back at 0
  // at 180 (and the remainder we get is 0 since it divides evenly). I only use greater than and less than symbols
  // because this function is not called if the angle is equal to any multiple of 90.

  function setDvp2() {
    let M1 = (vp1y - vp2y) / (vp1x - vp2x);
    let B1 = -vp1x * M1 + vp1y;
    let M2 = -1 / M1;
    let B2 = -originx * M2 + originy;
    let interx = (B2 - B1) / (M1 - M2);
    let intery = M1 * interx + B1;
    let N = Math.atan(Math.sqrt((originx - interx) * (originx - interx) + (originy - intery) * (originy - intery)) / rad);
    let A = Math.atan(Math.cos(N) * Math.sqrt((interx - vp1x) * (interx - vp1x) + (intery - vp1y) * (intery - vp1y)) / rad);
    let D = rad * Math.tan(A - (Math.PI / 4)) / Math.cos(N);
    let X = D / Math.sqrt(1 + M1 * M1);
    if (vp1x < vp2x) X = -X;

    dvp2x = interx + X;
    dvp2y = intery + M1 * X;
  }

  // The second and third diagonal vanishing points are both calculated using the same method. The approach is
  // basically the same as the one used to find the first diagonal vanishing point, but the second and third ones
  // do not lie on the horizon, the left one lies on the line between the first and second vanishing point, and the
  // right one is on the line between the first and third vanishing points. These lines between the vanishing
  // points are all vanishing lines, the horizon being just one of them, that describe planes that are perpendicular
  // to each other. All lines on a plane will have vanishing points within the vanishing line for the plane, which is
  // why the diagonal vanishing points lie on the vanishing lines between the vanishing points, because they're the
  // vanishing points for the lines that go from corner to corner in squares lying flat on the planes that vanish into
  // these vanishing lines.

  // So to start, I need to find where the middle of one of these lines is. Let's use the left one which is between the
  // first and second vanishing point. The middle is not at the point between the two sides. The middle of the horizon
  // is in the middle of the image, not between the second and third vanishing points. Unlike the horizon, this line is
  // slanted so it's not as easy to find the middle of the image. I can find it by extending a line from the
  // direction of view (the very center of the image) out perpendicular to the line I'm trying to find the middle of.
  // I can then find the intersection of these lines to find my midpoint.

  // So, I will need the line equations for both to do this. I'll start with the line between the vanishing points.
  // I first find the slope by calculating the difference in y coordinates of the vanishing points over the difference
  // in x coordinates of the vanishing points (rise over run). I then find the y intercept by finding what y equals
  // when x is zero. I can calculate this using the slope. The x coordinate of the first vanishing point is the difference
  // in the x coordinate from the y axis, so to move backwards to the y axis (where x equals zero) I would move -x. I can
  // then multiply the slope by -x to find the difference in the y coordinate, which I can then add to the y coordinate
  // of the first vanishing point to find the y intercept.

  // The second line is easier. Its slope is -1 divided by the slope of the first line. This gives us a slope that's
  // perpendicular to the slope of the first line. For the y intercept we start from the direction of view (the origin
  // in my calculations). The x coordinate of the origin is the distance right of the y axis, so to find the y intercept
  // we would move back by -x coordinate of the origin. We would multiply this by the slope to find the change in
  // the y coordinate which we would then add to the y coordinate of the origin to find the y intercept of our line.

  // Now we set the two line equations equal to each other and solve for x to find the intersection coordinates.
  // So the first slope times x plus the first y intercept equals the second slope times x plus the second y intercept.
  // After rearranging terms, we find that x equals the second y intercept minus the first y intercept over the
  // first slope minus the second slope. We can then plug this x value into either line equation to find the
  // y coordinate. So y equals x times the first slope plus the first y intercept (or we could use the second slope and
  // and second y intercept).

  // We can now find the tilt above the direction of view (N) of the vanishing by finding the distance between the origin
  // and our intersection point (the middle of the vanishing line). We can use the standard distance equation and see
  // that this distance equals the square root of the difference in x coordinates squared plus the difference in y
  // coordinates squared. This distance is equal to the tangent of N times the viewing distance (which is equal to the radius
  // of the 90 degree circle of view). Remember the tangent gives us the ratio of opposite over adjacent. The viewing distance
  // is the length of the adjacent line, so multipling it by this ratio will give us the length of the opposite side, which is
  // the distance between the origin and the intersection point. Rearranging things, we find that N equals the arctangent of
  // the distance between the origin and intersection divided by the viewing distance. The arctangent gives the angle whose
  // tangent equals the given ratio.

  // We can now find the angle to left to the first vanishing point (A) by finding the distance between the first vanishing
  // point and the intersection point. Once again we use the standard distance equation of the square root of the difference
  // in x coordinates squared plus the difference in y coordinates squared. This distance equals the viewing distance times
  // the tangent of A over the cosine N. This is the exact equation we used to find the distance to the left or the right
  // when finding the second and third vanishing points. If we rearrange terms, we find that A equals the arctangent of the
  // cosine of N times the distance between the first vanishing point and the intersection point over the
  // viewing distance.

  // Now that we have A and N, we can calculate the distance to our diagonal vanishing point, which will be located where
  // the vanishing point would be when we subtract 45 degrees from A. So this distance equals the viewing distance times
  // the tangent of A minus 45 over the cosine of N, exactly how we calculated the distance to the left or the right for
  // the second and third vanishing points.

  // Finally, we need to find the point located this distance away from the middle of the line. We need to find the change
  // in x coordinate that will result in this distance (we can find the change in the y coordinate by multiplying the change
  // in the x coordinate by the slope of the line). So the distance to the diagonal vanishing point equals the square root
  // of the change in x squared plus the slope squared times the change in x squared. We're using the standard distance
  // equation here. The change in y equals the change in x times the slope, which is why the equation only includes
  // the change in x. If we rearrange terms we find that the change in x equals plus or minus the distance to the diagonal
  // vanishing point over the square root of one plus the slope squared.

  // It's plus or minus, so we need to find whether it should be negated. This depends on whether a positive change in
  // x moves us towards the first vanishing point or away from it. Our distance is the distance going towards the first
  // vanishing point, so if a positive change in x moves towards the first vanishing point, the change in x should remain
  // as it is and not be negated. This will be the case if the x coordinate of the first vanishing point is greater than
  // the x coordinate of the second vanishing point. If the x coordinate of the first is less than the x coordinate of the
  // second, a negative change in x will move towards the first vanishing point, so the changed in x should be negated.

  function setDvp3() {
    let M1 = (vp1y - vp3y) / (vp1x - vp3x);
    let B1 = -vp1x * M1 + vp1y;
    let M2 = -1 / M1;
    let B2 = -originx * M2 + originy;
    let interx = (B2 - B1) / (M1 - M2);
    let intery = M1 * interx + B1;
    let N = Math.atan(Math.sqrt((originx - interx) * (originx - interx) + (originy - intery) * (originy - intery)) / rad);
    let A = Math.atan(Math.cos(N) * Math.sqrt((interx - vp1x) * (interx - vp1x) + (intery - vp1y) * (intery - vp1y)) / rad);
    let D = rad * Math.tan(A - (Math.PI / 4)) / Math.cos(N);
    let X = D / Math.sqrt(1 + M1 * M1);
    if (vp1x < vp3x) X = -X;

    dvp3x = interx + X;
    dvp3y = intery + M1 * X;
  }

  function linePrep(x, y) {
    // this function is used to calculate some values I will need to draw the lines from
    // a given point onto the canvas. The startangle is the angle from vertical the first
    // line drawn should be at. The divangle is the widest angle encompassed by the canvas if lines
    // were drawn from the point to two corners of the the canvas. The length is how long the line
    // should be to ensure it shows up on the canvas and does not extend past it too far.
    if ((0 <= x && x <= width) && (0 <= y && y <= height)) {
      return { startangle: (Math.random() * 360), divangle: 360, length: diagonal };
    }
    // if the coordinates are within the canvas, the startangle is random and the divangle is
    // 360 degrees. The widest angle is drawing a line to a corner and going 360 degrees around
    // the inside of the image to the same corner. The startangle is random so all the vanishing
    // points that are visible on the canvas don't all have their lines oriented exactly the same.
    // The diagonal variable is the diagonal length across the canvas. It's the longest straight line
    // within the canvas so if the lines are this long it will ensure that they're visible on the
    // canvas.
    if ((0 <= x && x <= width) && (y < 0)) {
      // if x is within the canvas but y is above, so the point is directly above the canvas
      return {
        startangle: findAngle(x, y - diagonal, x, y, width, 0),
        // startangle is the angle between a vertical line going up from the point and a
        // line going from the point to the top right corner of the canvas
        divangle: findAngle(width, 0, x, y, 0, 0),
        // the divangle is the angle from the point to the top right corner and to the
        // top left corner. It's the angle of rotation needed to move from one corner to
        // the other when rotating from the point. We're using these corners because they're
        // the ones that will give us the widest possible angle for a point oriented directly
        // above the canvas.
        length: findLength(x, y, 0, 0) + diagonal,
        // the length just needs to be long enough to be seen. The length from the point to the
        // top left corner plus the diagonal length will be long enough for it to be seen
      };
    }
    if ((0 <= x && x <= width) && (y > height)) {
      // if x is within the canvas but y is below, so the point is directly below the canvas
      return {
        startangle: 360 - findAngle(x, y - diagonal, x, y, 0, height),
        // like the previous one, but the angle goes to the bottom left corner instead. The result
        // is 360 minus the found angle because findAngle returns either the angle to the left or
        // the angle to the right, depending on which is smaller. I want the angle to the right, but
        // in this case the angle to the left is shorter. I just subtract the angle to the left from
        // 360 to get the angle to the right.
        divangle: findAngle(0, height, x, y, width, height),
        // same as before, but we're using the bottom left corner and bottom right corner
        length: findLength(x, y, 0, 0) + diagonal,
        // exactly the same as before, the length going from the point to any corner of the canvas
        // plus the diagonal canvas length will be long enough to be seen on the canvas
      };
    }
    if ((0 <= y && y <= height) && (x < 0)) {
      // if y is within the canvas but x is to the left, so the point is directly left
      return {
        startangle: findAngle(x, y - diagonal, x, y, 0, 0),
        // like before, but going to the top left corner
        divangle: findAngle(0, 0, x, y, 0, height),
        // like before, but using the top left corner and bottom left corner
        length: findLength(x, y, 0, 0) + diagonal,
      };
    }
    if ((0 <= y && y <= height) && (x > width)) {
      // if y is within the canvas but x is to the right, so the point is directly right
      return {
        startangle: 360 - findAngle(x, y - diagonal, x, y, width, height),
        // this one goes to the bottom right corner. The result is 360 minus the found angle
        // because the left angle is smaller and will be returned by findAngle whereas I
        // need the right angle.
        divangle: findAngle(width, height, x, y, width, 0),
        // using the bottom right corner and the top right corner
        length: findLength(x, y, 0, 0) + diagonal,
      };
    }
    if (x < 0 && y < 0) {
      // if the point is to the left and up from the canvas
      return {
        startangle: findAngle(x, y - diagonal, x, y, width, 0),
        // goes to the top right corner
        divangle: findAngle(width, 0, x, y, 0, height),
        // using the top right corner and the bottom left corner
        length: findLength(x, y, 0, 0) + diagonal,
      };
    }
    if (x < 0 && y > height) {
      // if the point is to the left and down from the canvas
      return {
        startangle: findAngle(x, y - diagonal, x, y, 0, 0),
        // goes to the top left corner
        divangle: findAngle(0, 0, x, y, width, height),
        // using the top left corner and the bottom right corner
        length: findLength(x, y, 0, 0) + diagonal,
      };
    }
    if (x > width && y < 0) {
      // if the point is to the right and up from the canvas
      return {
        startangle: 360 - findAngle(x, y - diagonal, x, y, width, height),
        // goes to the bottom right corner. I use 360 minus the found angle because the
        // angle to the left is shorter so it's returned by findAngle and I need the angle
        // to the right!
        divangle: findAngle(width, height, x, y, 0, 0),
        // using the bottom right corner and the top left corner
        length: findLength(x, y, 0, 0) + diagonal,
      };
    }
    if (x > width && y > height) {
      // if the point is to the right and down from the canvas
      return {
        startangle: 360 - findAngle(x, y - diagonal, x, y, 0, height),
        // goes to the bottom left corner. I use 360 minus because the left angle is returned.
        divangle: findAngle(0, height, x, y, width, 0),
        // using the bottom left corner and the top right corner
        length: findLength(x, y, 0, 0) + diagonal,
      };
    }
    return null;
    // if nothing matches then return null.
  }

  function drawParallel(rotation, numlines, color, lwidth = linewidth) {
    // this function is called if a line parallel to the image needs to be drawn, as these
    // lines have no vanishing points so they can't be drawn like other lines
    let moveby;
    // moveby is a variable that stores the distance each line should be moved by
    rotation = Number(rotation);
    // rotation is the rotation of the line from vertical
    while (rotation < 0) {
      rotation = +rotation + 360;
      // if the rotation is negative for some reason I make it positive by adding 360
      // until it's positive
    }
    if (rotation % 180 == 0) {
      // if the rotation is 180 or a multiple of 180
      moveby = width / (numlines + 1);
      // I set moveby to be the width of the canvas divided by the number of lines plus one because
      // I want the number of lines dividing the full width to be the number of lines that should be
      // displayed. If we divided by just the number of lines, the last line would not be visible because
      // it's moved to the edge of the paper
      let line = draw.line(0, 0, 0, height);
      // draw a vertical line on the left side of the canvas
      line.stroke({ color: color, width: lwidth });
      // set the line so its color and width match those given by the user
      while (numlines > 0) {
        // a loop using the number of lines as an interator, so that it loops through once
        // for each line
        line.move(moveby * numlines, 0);
        // the line is moved over the width of moveby times the iterator, so if we want 20 lines
        // then the first line will be moved over the width of moveby times 20 over to the right.
        // The next line will be moved over the width of moveby times 19, and so on.
        line = line.clone();
        // the line is set to be a clone of itself. This works because the move function is not
        // doing relative movement, it seems that I'm moving the point that's originally at (0,0),
        // the top left corner of the canvas. So the fact that the cloned line isn't in the starting
        // position doesn't matter since these coordinates aren't relative
        numlines--;
        // decrease numlines by one
      }
    }
    else if ((rotation - 90) % 180 == 0) {
      // if the rotation is 90 or a multiple of 180 plus 90
      moveby = height / (numlines + 1);
      // moveby will instead be the height divided up into the number of lines plus one
      let line = draw.line(0, 0, width, 0);
      // draw a line along the top of the canvas
      line.stroke({ color: color, width: lwidth });
      // set it to the user-defined color and width
      while (numlines > 0) {
        // we use the same loop as before, just moving down by moveby instead of right
        line.move(0, moveby * numlines);
        // once again it seems that I'm moving the line by giving new coordinates to the point
        // that's originally at (0,0)
        line = line.clone();
        numlines--;
      }
    }
    else if (rotation % 180 < 90) {
      // if rotation is between 0 and 90 degrees
      let extraheight = width * Math.tan(Math.radians(90 - rotation));
      moveby = (height + extraheight) / (numlines + 1);
      // now that we're dealing with slanted lines, they will need to travel a greater
      // vertical distance than just the height. If I have a line slanting up and to the
      // upper right corner, it will be visible until I move it to a distance equal to the
      // height down. It is also visible, though, if I move it up. This extra distance can
      // be calculated using the width times the tangent of 90 minus the rotation. This angle,
      // 90 minus the rotation, is the angle up from the top left corner of the canvas.
      // This line will not be visible, but lines underneath it will be. Once it moves across
      // the width of the canvas, this line will be at the height of the extra distance we need
      // to account for. So the tangent of this angle would be the opposite side (the height of the
      // extra distance) over the adjacent side (the width of the canvas). So we just have to multiply
      // the tangent of this angle by the canvas width to get the height of the extra distance.
      let line = draw.line(0, 0, width, -extraheight);
      // draw a line from the top left corner across the width and up the extra distance. It's negative
      // extra height because lower y coordinates move up in SVG
      line.stroke({ color: color, width: lwidth });
      // set line to user settings
      while (numlines > 0) {
        // a while loop using the number of lines as an iterator like before
        line.move(0, -extraheight + moveby * numlines);
        // moving stuff in SVG is weird. The y coordinate here is apparently the height of the
        // tallest part of the line, which is located at height -extraheight. So to move down I
        // need to add to this height by moveby (times the iterator which is numlines)
        line = line.clone();
        numlines--;
      }
    }
    else {
      // this part happens if rotation is greater than 90 degrees, so the lines are sloping
      // to the right and down
      let extraheight = -width * Math.tan(Math.radians(90 - rotation));
      moveby = (height + extraheight) / (numlines + 1);
      // like the other one, except that we add the negative width times the tangent of
      // 90 minus rotation for extra height. Since rotation is over 90 degrees, this angle will
      // be negative and so the tangent will be negative. The negative width makes it positive again.
      let line = draw.line(width, 0, 0, -extraheight);
      // draw a line going from the top right corner to a point at the extra height above the top
      // left corner
      line.stroke({ color: color, width: lwidth });
      while (numlines > 0) {
        line.move(0, -extraheight + moveby * numlines);
        line = line.clone();
        numlines--;
      }
      // all this stuff is the same
    }
  }

  function drawCirc(color, x, y, numlines, lwidth = linewidth) {
    // this function draws lines coming out of a vanishing point
    if (typeof x == 'string') {
      drawParallel(x.slice(8), numlines, color, lwidth);
      // if the x value is a string, the first eight characters are sliced from it and the remaining
      // string is passed to the drawParallel function as the rotation. When a vanishing point does
      // not exist, meaning that the lines are parallel to the image, I have a point in the code where
      // its x value is set to a string starting with "vertical" and then the degree of rotation from vertical.
      // So lines 20 degrees from vertical would have an x value of "vertical20"
    };
    if (typeof x === 'undefined') return;
    if (typeof y === 'undefined') return;
    // if x or y are undefined then no lines are drawn for them
    let prep = linePrep(x, y);
    // call the line prepper for points x and y
    let line = draw.line(x, y, x, y - prep.length);
    // a vertical line is drawn going up from the given point by the length given by the line prepper
    line.stroke({ color: color, width: lwidth });
    // the line color and width are set to the user's settings
    let rotangle = prep.divangle / (numlines + 1);
    // the rotange is set to the divangle divided by the number of lines plus one. Just like with the
    // parallel lines, if we only divided by the number of lines, the last line would be drawn at
    // the very edge where it wouldn't be visible
    if (prep.divangle == 360) {
      numlines = 2 * numlines;
      // if the divangle is a full 360, I will want twice the number of lines. They're all coming out
      // of the same point, so once it goes past 180 degrees each line will just be completing the other
      // side of a line. It will appear as the correct number of lines all intersecting at the point.
      rotangle = 360 / numlines;
      // here the divangle is simply divided by the number of lines. No lines can be drawn off the screen
      // since they're all visible so I don't need to add one to it.
    }
    while (numlines > 0) {
      // another while loop using the number of lines as the iterator
      line.rotate(prep.startangle + rotangle * numlines, x, y);
      // the starting line, the vertical line going up from the point, is rotated around the point
      // to the startangle plus the rotangle times the number of lines. The startangle is the angle,
      // going clockwise from vertical, to the canvas. The rotangle was made by dividing up the divangle,
      // which is the measurement of the widest angle needed to rotate from the startangle across the
      // entire canvas, so each rotangle is one increment across the canvas for the needed number of lines.
      line = line.clone();
      // the line is cloned. Just like with the parallel lines, this works because the rotation is
      // not relative, so the fact that the cloned line has already been rotated doesn't affect
      // anything when it's rotated again (or at least that's how it seems to work, once again SVG
      // works in a weird way and I don't care enough to learn all the ins and outs).
      numlines--;
      // the iterator is decreased by one
    }
  }

  function fovRotate(x, y) {
    // this function rotates all the vanishing points around the direction of view (the middle of
    // the image or origin)
    if (typeof x == 'string') {
      // if the x value is a string, meaning it's describing lines parallel to the image
      x = (+x.slice(8) + fovrotation + 360) % 360;
      // the rotation component is sliced out and the fovrotation is added to it and then I add
      // 360 and take the remainder of 360 to ensure I'm not dealing with negative values.
      let jorp = "vertical";
      x = jorp.concat(x);
      // I merge a string of "vertical" with the rotation component
    }
    if (typeof x === 'undefined') return { x: x, y: y };
    if (typeof y === 'undefined') return { x: x, y: y };
    // if x or y are undefined it will return whatever their values are. Vanishing points that are at
    // infinity (so they produce lines parallel to the image plane) have undefined y values so this ensures
    // that the string I've set for the x value gets passed on.
    x = x - originx;
    y = y - originy;
    // I move x and y so that they're where they would be if the origin was in the top left corner
    let oldx = x;
    x = x * Math.cos(Math.radians(fovrotation)) - y * Math.sin(Math.radians(fovrotation));
    y = y * Math.cos(Math.radians(fovrotation)) + oldx * Math.sin(Math.radians(fovrotation));
    // I use the standard rotation about the origin functions to find the new rotated x and y
    // coordinates from the top left corner of the canvas. I use oldx rather than x when
    // calculating y because x has already been changed to the new value and I need the old
    // value!
    x = x + originx;
    y = y + originy;
    // I move the points back where they would be if the origin is in the direction of view
    // (the center of the canvas)
    return { x: x, y: y};
  }

  // the normal setting functions do not work with certain orientations because the vanishing
  // points will be an infinite distance away
  if (tilt % 180 == 0) {
    if (leftangle % 180 == 0) {
      // if tilt is 0 and the left angle is 0 (or a multiple of 180, effectively 0)
      vp1x = "vertical";
      // the first vanishing point doesn't exist (it's at infinity) because there is no
      // tilt to the horizon. These lines will be vertical like in normal two point perspective
      vp2x = originx;
      vp2y = originy;
      // the second vanishing point will be at the origin because the angle to the left is
      // at 0 degrees (or a multiple of 180 degrees)
      vp3x = "vertical90";
      // the third vanishing point doesn't exist (it's out at infinity) because the angle to
      // the right is 90 degrees. These lines will be horizontal (encoded as "vertical90", 90 degrees
      // from vertical)
      dvp1x = originx + rad;
      dvp1y = originy;
      // the first diagonal vanishing point will be to 45 degrees. The tangent of 45 degrees is one
      // so the distance to the right to this vanishing point is simply the viewing distance (which is
      // equal to the 90 degree circle of view)
      dvp2x = originx;
      dvp2y = originy + rad;
      // the second diagonal vanishing point will also be to 45 degrees, just down instead of to
      // the right. This distance is also simply equal to the viewing distance.
      dvp3x = "vertical45";
      // the third diagonal vanishing point is at infinity because the first and third vanishing points
      // are also at infinity. So it creates lines parallel to the image plane that are oriented between
      // them, so at 45 degrees.
    }
    else if ((leftangle - 90) % 180 == 0) {
      // if tilt is 0 and the left angle is 90
      vp1x = "vertical";
      // the first vanishing point still won't exist, and the lines will be vertical
      vp2x = "vertical90";
      // the second vanishing point doesn't exist and so its lines will be horizontal
      vp3x = originx;
      vp3y = originy;
      // the third vanishing point is at the origin because the right angle is 0
      dvp1x = originx - rad;
      dvp1y = originy;
      dvp3x = originx;
      dvp3y = originy + rad;
      // once again these diagonal vanishing points are at 45 degrees so the distance is
      // equal to the viewing distance. For the first diagonal vanishing point I use the
      // negative distance because I want the vanishing point to go to the left, towards where
      // the vanishing point would be at infinity
      dvp2x = "vertical45";
      // the second diagonal vanishing point is at infinity because the first and second
      // vanishing points are at infinity
    }
    else {
      // if tilt is 0 and the left angle isn't 0 or 90
      vp1x = "vertical";
      // first vanishing point still at infinity, vertical lines
      setVp2();
      setVp3();
      setDvp1();
      // the second and third vanishing points and the first diagonal vanishing point
      // between them are all calculated as normal
      dvp2x = vp2x;
      let N = Math.atan((originx - vp2x)/rad);
      dvp2y = vp2y + rad / Math.cos(N);
      // the second and third diagonal vanishing points can be calculated similar to how
      // the normal second and third vanishing points are calculated. Our angle for both diagonal
      // vanishing points is 45 degrees, and the tangent of 45 degrees is 1, which is why the tangent
      // does not show up in the calculations here. The distance to the left or right to the second or
      // third vanishing point is used to find a tilt N for the vertical vanishing lines these
      // points appear on. We then calculate the same way we do for the normal vanishing points, just
      // using these vertical vanishing lines instead of the horizon.
      dvp3x = vp3x;
      N = Math.atan((originx - vp3x)/rad);
      dvp3y = vp3y + rad / Math.cos(N);
    }
  }
  else if ((tilt - 90) % 180 == 0){
    // if the tilt is 90 degrees or -90 degrees
    vp1x = originx;
    vp1y = originy;
    // the first vanishing point is in the center, in the direction of view (or origin or whatever)
    if ((tilt - 90) % 360 == 0) {
      // if the tilt is 90 degrees
      vp2x = "vertical" + (360 - leftangle);
      vp3x = "vertical" + rightangle;
      // both the second and third vanishing points are at infinity. Their paralell lines should be
      // rotated to their orientation. 360 minus the left angle will give us the standard value for
      // rotating to the right, which is what we're expecting.
      dvp1x = "vertical" + (rightangle - 45);
      // the first diagonal vanishing point is at infinity because the second and third vanishing
      // points are at infinity. It's oriented halway between them, so 45 degrees from the right angle.
      dvp2x = rad * Math.sin(Math.radians(-leftangle)) + originx;
      dvp2y = -rad * Math.cos(Math.radians(-leftangle)) + originy;
      dvp3x = rad * Math.sin(Math.radians(rightangle)) + originx;
      dvp3y = -rad * Math.cos(Math.radians(rightangle)) + originy;
      // the second and third diagonal vanishing points will be out to 45 degrees, so they will be out
      // at the viewing distance. They will rotate around the origin in a circle as the left and right angles
      // increase or decrease. Setting x to sine times the viewing distance and y to cosine times the viewing
      // distance results in a circle with a radius of the viewing distance. The ys are negative to account for
      // the flipped y axis used by SVG, to ensure they rotate in the correct direction. The cosine function is
      // assigned to the y coordinates because cosine is 1 at 0 degrees, so the rotation will start from the vertical up
      // position. If we made x cosine and y sine, the rotation would start from the right horizontal position.
    }
    else {
      // if the tilt is -90 degrees
      vp2x = "vertical" + leftangle;
      vp3x = "vertical" + (360 - rightangle);
      // the left and right angles are flipped, because we're now upside down
      dvp1x = "vertical" + (leftangle - 45);
      // the first diagonal vanishing point is at infinity here too. I use the left angle
      // instead of the right angle now because we're upside down
      dvp2x = rad * Math.sin(Math.radians(-leftangle)) + originx;
      dvp2y = rad * Math.cos(Math.radians(-leftangle)) + originy;
      dvp3x = rad * Math.sin(Math.radians(rightangle)) + originx;
      dvp3y = rad * Math.cos(Math.radians(rightangle)) + originy;
      // we don't negate the ys because we're now flipped upside-down, so these diagonal vanishing
      // points should now rotate the other direction
    }
  }
  else {
    if (leftangle % 180 == 0) {
      // if the left angle is 0 (or a multiple of 180) and tilt is normal
      setVp1();
      setVp2();
      // first two vanishing points are normal
      vp3x = "vertical90";
      // third vanishing point is out to infinity to the side, so its lines are horizontal
      setDvp1();
      // the first diagonal vanishing point is normal. It works even though the third vanishing
      // point doesn't exist (it's at infinity)
      dvp2x = originx;
      if (vp2y < vp1y) {
        dvp2y = originy - rad * Math.tan(Math.radians(tilt - 45));
      }
      else {
        dvp2y = originy - rad * Math.tan(Math.radians(tilt + 45));
      }

      // the second diagonal vanishing point will cause errors because the line between the
      // first and second vanishing points is vertical. Since it's vertical, the x coordinate
      // will be the same as those two vanishing points (at the origin) and the y coordinate
      // will be down 45 degrees from the horizon, which we can find by subtracting 45 degrees
      // from the horizon. If the second vanishing point is below the first vanishing point, then
      // we need to add 45 degrees instead.
      dvp3x = vp1x + rad / Math.cos(Math.radians(90 - tilt));
      dvp3y = vp1y;
      // the third diagonal vanishing point can't be calculated normally because the third
      // vanishing point is out at infinity, so it extends out horizontally. Because of this
      // its y coordinate will be the same as the first vanishing point that it extends out from.
      // To find its length we use the usual equation with the viewing distance times the tangent
      // of the angle divided by the cosine of the horizon tilt. In this case we use the tilt of the
      // first vanishing point instead, which is 90 minus the tilt. Since our angle is 45 degrees, the
      // tangent does not appear because it equals one.
    }
    else if ((leftangle - 90) % 180 == 0) {
      // if the left angle is 90 (plus or minus a multiple of 180) and the tilt is normal
      setVp1();
      // first vanishing point is normal
      vp2x = "vertical90";
      // second vanishing point is out at infinity to the side, so its lines are horizontal
      setVp3();
      setDvp1();
      // the third vanishing point and first diagonal vanishing point are normal
      dvp2x = vp1x - rad / Math.cos(Math.radians(90 - tilt));
      dvp2y = vp1y;
      // the second diagonal vanishing point is calulated just like the third diagonal vanishing
      // point in the previous one. I subtract the distance because this is going to the left.
      dvp3x = originx;
      if (vp3y < vp1y) {
        dvp3y = originy - rad * Math.tan(Math.radians(tilt - 45));
      }
      else {
        dvp3y = originy - rad * Math.tan(Math.radians(tilt + 45));
      }
      // the third diagonal vanishing point is calculated just like the second diagonal vanishing
      // point in the previous one, just using the third vanishing point and the first vanishing point.
    }
    else {
      // if none of the special conditions are matched, all the vanishing points are set
      // as normal
      setVp1();
      setVp2();
      setVp3();
      setDvp1();
      setDvp2();
      setDvp3();
    }
  }

  let charles;
  // charles holds the object returned by fovRotate(). This object contains the attributes
  // x and y which are the new x and y coordinates of the point after rotating around the origin
  charles = fovRotate(vp1x, vp1y);
  vp1x = charles.x;
  vp1y = charles.y;
  // we just run fovRotate for a point and then set those points to equal the values returned
  // by the function as the attributes of an object which is referenced by charles
  charles = fovRotate(vp2x, vp2y);
  vp2x = charles.x;
  vp2y = charles.y;
  charles = fovRotate(vp3x, vp3y);
  vp3x = charles.x;
  vp3y = charles.y;
  charles = fovRotate(dvp1x, dvp1y);
  dvp1x = charles.x;
  dvp1y = charles.y;
  charles = fovRotate(dvp2x, dvp2y);
  dvp2x = charles.x;
  dvp2y = charles.y;
  charles = fovRotate(dvp3x, dvp3y);
  dvp3x = charles.x;
  dvp3y = charles.y;

  draw.remove();
  // the old drawing is deleted
  draw = SVG('drawing').size(width, height);
  // a new drawing is created right after, effectively clearing the drawing
  drawCirc(colortopdvp, dvp1x, dvp1y, linestopdvp, dvplinewidth);
  // we just draw each of the six vanishing points now
  drawCirc(colorleftdvp, dvp2x, dvp2y, linesleftdvp, dvplinewidth);
  drawCirc(colorrightdvp, dvp3x, dvp3y, linesrightdvp, dvplinewidth);
  drawCirc(colorbottom, vp1x, vp1y, linesbottom);
  drawCirc(colorleft, vp2x, vp2y, linesleft);
  drawCirc(colorright, vp3x, vp3y, linesright);

  document.getElementById("doubledrawing").src = 'data:image/svg+xml,' + draw.svg();
  // this line of code puts the generated svg canvas into an <img> tag. The SVG library I used
  // puts the canvas into a <div> tag, which makes it difficult to save or copy the svg image.
  // Unfortunately this creates a broken image in some browsers so I have to use an alternate
  // html file for those browsers (I could try to detect whether or not this will work but I'd
  // rather just give the user both options in case I mess something up)
}

var ResizingDancer = function(top, left, timeBetweenSteps){
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this._oldStep = Dancer.prototype.step;

  Dancer.call(this, top, left, timeBetweenSteps);
};

ResizingDancer.prototype = Object.create(Dancer.prototype);
ResizingDancer.prototype.constructor = ResizingDancer;

ResizingDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  this._oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this._$node.toggle(function(){
    $(this).stop().animate({
      width:'100px',
      height:'100px',
      'border-radius':'100px'},
      500);
  }, function(){
    $(this).stop().animate({
      width: '100px',
      height: '100px',
      'border-radius': '100px'
    },
    500);
  });
};
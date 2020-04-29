 import React from 'react';
 import {Field, reduxForm} from 'redux-form';


 class Form extends React.Component {
     renderInput(formProps){
         
         return (<input 
                     onChange={formProps.input.onChange}
                     value={formProps.input.value}
                 />)
         }
     textArea(formProps){
         
         return (<textarea 
                     onChange={formProps.input.onChange}
                     value={formProps.input.value}
                 ></textarea>)
         }
     onSubmit=(formValues)=>{
    
          this.props.onSubmit(formValues);
      }

     render(){
         
         return (
             <div>
                  <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                        <div>
                         <label>Title</label>
                         <div>
                             <Field name="title" component={this.renderInput}/>
                         </div>
                     </div>
                     <div>
                         <label>Text</label>
                         <div>
                             <Field name="text" component={this.textArea}/>
                         </div>
                     </div>
                     <div>
                         <label>Created By</label>
                         <div>
                             <Field name="created" component={this.renderInput}/>
                         </div>
                     </div>
                     <div>
                         <label>Assigned To</label>
                         <div>
                             <Field name="assigned" component={this.renderInput}/>
                         </div>
                     </div>
                     <div>
                         <label>Status Text</label>
                         <div>
                             <Field name="status" component={this.renderInput}/>
                         </div>
                     </div>
                     <div>
                         <button type="submit">Submit</button>
                     </div>
                 </form>
                 <a href="/api/action">sign to the server</a>
             </div>
         )
     }
  
 }

export default reduxForm({
    form: 'Form'
})(Form)




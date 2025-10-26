import { Routes } from '@angular/router';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { HomeComponent } from './components/home/home.component';
import { InputAndOutputComponent } from './input-and-output/input-and-output.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { PipeExampleComponent } from './components/pipe-example/pipe-example.component';
import { ServiceComponent } from './components/service/service.component';
import { ComponentLifecycleComponent } from './components/component-lifecycle/component-lifecycle.component';
import { ObservablesComponent } from './observables/observables.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { ProductAPIComponent } from './components/product-api/product-api.component';
import { FormHandling1Component } from './components/form-handling1/form-handling1.component';
import { FormHandling2Component } from './components/form-handling2/form-handling2.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "data-binding", component: DatabindingComponent},
    {path: "ip", component: InputAndOutputComponent},
    {path: "dir", component: DirectivesComponent},
    {path: 'pipe-example', component: PipeExampleComponent},
    {path: 'service', component: ServiceComponent},
    {path: 'life-cycle', component: ComponentLifecycleComponent},
    {path: 'observables', component: ObservablesComponent},
    {path: 'quotes', component: QuotesComponent},
    {path: 'product-api', component: ProductAPIComponent},
    {path: 'form1', component: FormHandling1Component},
    {path: 'form2', component: FormHandling2Component},
];
